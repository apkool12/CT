"use client";

import { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL ?? "http://localhost:3001";
const DISPLAY_NAME_KEY = "aigo-display-name";

export function getDisplayName(): string {
  if (typeof window === "undefined") return "익명";
  return localStorage.getItem(DISPLAY_NAME_KEY)?.trim() || "익명";
}

export function setDisplayName(name: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(DISPLAY_NAME_KEY, name.trim() || "익명");
}

export function useSocket(roomId?: string) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [message, setMessage] = useState<{ text: string; displayName: string } | null>(null);

  useEffect(() => {
    setConnectionError(null);
    const s = io(SOCKET_URL, {
      transports: ["websocket"],
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      timeout: 10000,
    });

    s.on("connect", () => {
      setIsConnected(true);
      setConnectionError(null);
    });
    s.on("disconnect", () => setIsConnected(false));
    s.on("connect_error", (err) => {
      setIsConnected(false);
      setConnectionError(
        err.message || "Socket 서버에 연결할 수 없습니다. npm run socket 으로 서버를 실행해 주세요."
      );
    });
    s.on("chat:message", (payload: { text: string; displayName?: string }) =>
      setMessage({ text: payload.text, displayName: payload.displayName || "익명" })
    );

    if (roomId) s.emit("room:join", { roomId });
    setSocket(s);

    return () => {
      if (roomId) s.emit("room:leave", { roomId });
      s.close();
    };
  }, [roomId]);

  const sendMessage = useCallback(
    (text: string) => {
      if (!socket?.connected) return;
      const displayName = getDisplayName();
      socket.emit("chat:message", {
        roomId: roomId ?? "lobby",
        text,
        displayName,
      });
    },
    [socket, roomId]
  );

  const reconnect = useCallback(() => {
    if (socket) {
      setConnectionError(null);
      socket.connect();
    }
  }, [socket]);

  return { socket, isConnected, connectionError, message, sendMessage, reconnect };
}
