import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
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

  socket.on("chat:message", ({ roomId, text }) => {
    const target = roomId ?? "lobby";
    io.to(target).emit("chat:message", { text, from: socket.id });
  });

  socket.on("disconnect", () => {
    console.log("client disconnected:", socket.id);
  });
});

const PORT = process.env.SOCKET_PORT ?? 3001;
httpServer.listen(PORT, () => {
  console.log(`Socket server running at http://localhost:${PORT}`);
});
