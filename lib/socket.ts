"use client";

import { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL ?? "http://localhost:3001";

export function useSocket(roomId?: string) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const s = io(SOCKET_URL, {
      transports: ["websocket", "polling"],
      autoConnect: true,
    });

    s.on("connect", () => setIsConnected(true));
    s.on("disconnect", () => setIsConnected(false));
    s.on("chat:message", (payload: { text: string }) => setMessage(payload.text));

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
      socket.emit("chat:message", { roomId: roomId ?? "lobby", text });
    },
    [socket, roomId]
  );

  return { socket, isConnected, message, sendMessage };
}
