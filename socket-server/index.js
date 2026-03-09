import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: true,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("client connected:", socket.id);

  socket.on("room:join", ({ roomId }) => {
    socket.join(roomId);
  });

  socket.on("room:leave", ({ roomId }) => {
    socket.leave(roomId);
  });

  socket.on("chat:message", ({ roomId, text, displayName }) => {
    const target = roomId ?? "lobby";
    const name = displayName?.trim() || "익명";
    io.to(target).emit("chat:message", { text, from: socket.id, displayName: name });
  });

  socket.on("disconnect", () => {
    console.log("client disconnected:", socket.id);
  });
});

const PORT = process.env.SOCKET_PORT ?? 3001;
httpServer.listen(PORT, () => {
  console.log(`Socket server running at http://localhost:${PORT}`);
});
