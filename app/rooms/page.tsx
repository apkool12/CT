"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import Link from "next/link";

type Room = {
  id: string;
  name: string;
  createdAt: string;
};

const Page = styled.div`
  padding: 48px 24px;
  max-width: 640px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
`;

const Desc = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 32px;
`;

const CreateForm = styled.form`
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
`;

const Input = styled.input`
  flex: 1;
  padding: 14px 18px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #206a96;
  }

  &::placeholder {
    color: #999;
  }
`;

const CreateButton = styled.button`
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(90deg, #3fa3d9 0%, #206a96 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const RoomList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RoomItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:hover {
    border-color: #206a96;
    box-shadow: 0 4px 12px rgba(32, 106, 150, 0.1);
  }
`;

const RoomItemLink = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #1a1a1a;
  min-width: 0;
`;

const RoomName = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
`;

const RoomMeta = styled.span`
  font-size: 0.875rem;
  color: #888;
`;

const DeleteButton = styled.button`
  flex-shrink: 0;
  margin-left: 12px;
  padding: 8px 14px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #dc2626;
  background: transparent;
  border: 1px solid #dc2626;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: rgba(220, 38, 38, 0.08);
  }
`;

const Empty = styled.p`
  padding: 48px 24px;
  text-align: center;
  color: #888;
  font-size: 1rem;
`;

const Error = styled.p`
  padding: 12px 16px;
  margin-bottom: 24px;
  background: #fef2f2;
  color: #dc2626;
  border-radius: 8px;
  font-size: 0.9375rem;
`;

export default function RoomsPage() {
  const router = useRouter();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRooms = async () => {
    const res = await fetch("/api/rooms");
    if (res.ok) {
      const data = await res.json();
      setRooms(data);
    }
  };

  useEffect(() => {
    fetchRooms();
    const interval = setInterval(fetchRooms, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/rooms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "방 생성에 실패했습니다.");
        return;
      }
      setName("");
      await fetchRooms();
      router.push(`/rooms/${data.id}`);
    } catch {
      setError("방 생성에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <Title>방 목록</Title>
      <Desc>스터디원과 함께 문제를 풀어보세요.</Desc>

      {error && <Error>{error}</Error>}

      <CreateForm onSubmit={handleCreate}>
        <Input
          type="text"
          placeholder="방 이름 입력"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={30}
          disabled={loading}
        />
        <CreateButton type="submit" disabled={loading || !name.trim()}>
          {loading ? "생성 중..." : "방 만들기"}
        </CreateButton>
      </CreateForm>

      <RoomList>
        {rooms.length === 0 ? (
          <Empty>아직 생성된 방이 없습니다. 위에서 방을 만들어 보세요.</Empty>
        ) : (
          rooms.map((room) => (
            <RoomItemWrap key={room.id}>
              <RoomItemLink href={`/rooms/${room.id}`}>
                <RoomName>{room.name}</RoomName>
                <RoomMeta>
                  {new Date(room.createdAt).toLocaleDateString("ko-KR")}
                </RoomMeta>
              </RoomItemLink>
              <DeleteButton
                type="button"
                onClick={async (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (!confirm(`"${room.name}" 방을 삭제하시겠습니까?`)) return;
                  const res = await fetch(`/api/rooms/${room.id}`, {
                    method: "DELETE",
                  });
                  if (res.ok) await fetchRooms();
                }}
              >
                삭제
              </DeleteButton>
            </RoomItemWrap>
          ))
        )}
      </RoomList>
    </Page>
  );
}
