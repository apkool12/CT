"use client";

import { useState } from "react";
import styled from "@emotion/styled";
import { useSocket } from "@/lib/socket";

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
`;

const Subtitle = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.muted};
`;

const Status = styled.p`
  margin-top: 1rem;
  font-size: 0.9375rem;
`;

const StatusBadge = styled.span<{ connected: boolean }>`
  color: ${({ connected, theme }) =>
    connected ? theme.colors.primary : "#ef4444"};
`;

const Form = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.5rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: #111;
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 0.9375rem;
  width: 100%;
  max-width: 320px;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radii.md};
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export default function Home() {
  const { isConnected, message, sendMessage } = useSocket();
  const [input, setInput] = useState("");

  return (
    <>
      <Title>CT · 코딩테스트 플랫폼</Title>
      <Subtitle>실시간 채팅 · 랭킹 (Socket.IO 연동)</Subtitle>
      <Status>
        Socket 상태:{" "}
        <StatusBadge connected={isConnected}>
          {isConnected ? "연결됨" : "연결 끊김"}
        </StatusBadge>
      </Status>
      {message && (
        <Subtitle style={{ marginTop: "0.5rem" }}>
          마지막 수신: {message}
        </Subtitle>
      )}
      <Form>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
          placeholder="메시지 입력 후 Enter"
        />
        <Button type="button" onClick={() => sendMessage(input)}>
          전송
        </Button>
      </Form>
    </>
  );
}
