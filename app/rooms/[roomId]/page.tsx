"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styled from "@emotion/styled";
import Link from "next/link";
import { useSocket, getDisplayName, setDisplayName } from "@/lib/socket";

const Page = styled.div`
  padding: 24px;
  max-width: 960px;
  margin: 0 auto;
  min-height: 60vh;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9375rem;
  color: #666;
  text-decoration: none;
  margin-bottom: 24px;

  &:hover {
    color: #206a96;
  }
`;

const Header = styled.header`
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 4px;
`;

const Status = styled.span<{ $connected: boolean }>`
  font-size: 0.875rem;
  color: ${({ $connected }) => ($connected ? "#16a34a" : "#dc2626")};
`;

const StatusWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
`;

const RetryButton = styled.button`
  padding: 6px 12px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #206a96;
  background: transparent;
  border: 1px solid #206a96;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: rgba(32, 106, 150, 0.08);
  }
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 24px;
  min-height: 400px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProblemArea = styled.section`
  background: #f8f9fa;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e5e5e5;
`;

const ChatArea = styled.section`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  overflow: hidden;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  min-height: 200px;
`;

const ChatInputForm = styled.form`
  display: flex;
  padding: 12px;
  border-top: 1px solid #e5e5e5;
  gap: 8px;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  font-size: 0.9375rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #206a96;
  }
`;

const ChatSendButton = styled.button`
  padding: 12px 20px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #fff;
  background: #206a96;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Placeholder = styled.p`
  color: #888;
  font-size: 0.9375rem;
  line-height: 1.6;
`;

const Loading = styled.p`
  color: #666;
  font-size: 1rem;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
`;

const DeleteButton = styled.button`
  padding: 8px 16px;
  font-size: 0.875rem;
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

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #e5e5e5;
  gap: 12px;
`;

const DisplayNameInput = styled.input`
  flex: 1;
  max-width: 140px;
  padding: 8px 12px;
  font-size: 0.8125rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;

  &:focus {
    border-color: #206a96;
  }
`;

const ChatMessage = styled.div`
  margin-bottom: 12px;
  font-size: 0.9375rem;
`;

const ChatMessageName = styled.span`
  font-weight: 600;
  color: #206a96;
  margin-right: 6px;
`;

export default function RoomPage() {
  const params = useParams();
  const router = useRouter();
  const roomId = params.roomId as string;
  const { isConnected, connectionError, message, sendMessage, reconnect } =
    useSocket(roomId);

  const [room, setRoom] = useState<{ id: string; name: string } | null>(null);
  const [chatText, setChatText] = useState("");
  const [messages, setMessages] = useState<{ text: string; displayName: string }[]>([]);
  const [displayName, setDisplayNameState] = useState("익명");
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    setDisplayNameState(getDisplayName());
  }, []);

  useEffect(() => {
    fetch(`/api/rooms`)
      .then((res) => res.json())
      .then((rooms: { id: string; name: string }[]) => {
        const found = rooms.find((r) => r.id === roomId);
        if (found) setRoom(found);
        else setRoom({ id: roomId, name: "알 수 없는 방" });
      })
      .catch(() => setRoom({ id: roomId, name: "알 수 없는 방" }));
  }, [roomId]);

  useEffect(() => {
    if (message) {
      setMessages((prev) => [...prev, message]);
    }
  }, [message]);

  const handleDisplayNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim() || "익명";
    setDisplayNameState(value);
    setDisplayName(value);
  };

  const handleDeleteRoom = async () => {
    if (!confirm("이 방을 삭제하시겠습니까?")) return;
    setDeleteLoading(true);
    try {
      const res = await fetch(`/api/rooms/${roomId}`, { method: "DELETE" });
      if (res.ok) {
        router.push("/rooms");
      } else {
        alert("방 삭제에 실패했습니다.");
      }
    } catch {
      alert("방 삭제에 실패했습니다.");
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatText.trim()) return;
    sendMessage(chatText.trim());
    setChatText("");
  };

  return (
    <Page>
      <BackLink href="/rooms">← 방 목록</BackLink>

      <Header>
        <Title>{room?.name ?? "로딩 중..."}</Title>
        <StatusWrap>
          <Status $connected={isConnected}>
            {isConnected
              ? "● 연결됨"
              : connectionError
                ? "○ 연결 실패"
                : "○ 연결 중..."}
          </Status>
          {connectionError && (
            <RetryButton type="button" onClick={reconnect}>
              재시도
            </RetryButton>
          )}
        </StatusWrap>
        {connectionError && (
          <p style={{ marginTop: 8, fontSize: "0.8125rem", color: "#666" }}>
            {connectionError}
          </p>
        )}
        <HeaderActions>
          <DeleteButton
            type="button"
            onClick={handleDeleteRoom}
            disabled={deleteLoading}
          >
            {deleteLoading ? "삭제 중..." : "방 삭제"}
          </DeleteButton>
        </HeaderActions>
      </Header>

      <Main>
        <ProblemArea>
          <Placeholder>
            문제 영역입니다. Solved.ac API 연동 후 문제 목록이 표시됩니다.
          </Placeholder>
        </ProblemArea>

        <ChatArea>
          <ChatHeader>
            <DisplayNameInput
              type="text"
              placeholder="이름 (미입력 시 익명)"
              value={displayName}
              onChange={handleDisplayNameChange}
              onBlur={(e) => {
                const v = e.target.value.trim() || "익명";
                setDisplayName(v);
                setDisplayNameState(v);
              }}
            />
          </ChatHeader>
          <ChatMessages>
            {messages.length === 0 ? (
              <Placeholder>채팅 메시지가 여기에 표시됩니다.</Placeholder>
            ) : (
              messages.map((msg, i) => (
                <ChatMessage key={i}>
                  <ChatMessageName>{msg.displayName}:</ChatMessageName>
                  {msg.text}
                </ChatMessage>
              ))
            )}
          </ChatMessages>
          <ChatInputForm onSubmit={handleSendChat}>
            <ChatInput
              type="text"
              placeholder="메시지 입력..."
              value={chatText}
              onChange={(e) => setChatText(e.target.value)}
              disabled={!isConnected}
            />
            <ChatSendButton type="submit" disabled={!isConnected}>
              전송
            </ChatSendButton>
          </ChatInputForm>
        </ChatArea>
      </Main>
    </Page>
  );
}
