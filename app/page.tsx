"use client";

import { useEffect, useState } from "react";
import { useSocket } from "@/lib/socket";

export default function Home() {
  const { isConnected, message, sendMessage } = useSocket();
  const [input, setInput] = useState("");

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>CT · 코딩테스트 플랫폼</h1>
      <p style={{ marginTop: "0.5rem", color: "#888" }}>
        실시간 채팅 · 랭킹 (Socket.IO 연동)
      </p>
      <p style={{ marginTop: "1rem" }}>
        Socket 상태:{" "}
        <span style={{ color: isConnected ? "#22c55e" : "#ef4444" }}>
          {isConnected ? "연결됨" : "연결 끊김"}
        </span>
      </p>
      {message && (
        <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
          마지막 수신: {message}
        </p>
      )}
      <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.5rem" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
          placeholder="메시지 입력 후 Enter"
          style={{
            padding: "0.5rem 0.75rem",
            borderRadius: "6px",
            border: "1px solid #333",
            background: "#111",
            color: "#eee",
            flex: 1,
            maxWidth: "320px",
          }}
        />
        <button
          type="button"
          onClick={() => sendMessage(input)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            border: "none",
            background: "#22c55e",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          전송
        </button>
      </div>
    </main>
  );
}
