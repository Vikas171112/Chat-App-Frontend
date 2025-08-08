// server.js
import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const PORT = 5000;

// Allow all origins
app.use(cors({ origin: "*" }));

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Step 1: Map to track userId => socketId
const onlineUsers = new Map();

io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  // Step 2: Register user
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
    console.log(`User ${userId} registered with socket ${socket.id}`);
  });

  // Step 3: Handle incoming messages
  socket.on("send-msg", (data) => {
    const { to, from, message } = data;
    const sendToSocket = onlineUsers.get(to);
    if (sendToSocket) {
      io.to(sendToSocket).emit("msg-receive", { from, message });
    }
  });

  // Optional: Remove disconnected user
  socket.on("disconnect", () => {
    for (let [userId, sockId] of onlineUsers.entries()) {
      if (sockId === socket.id) {
        onlineUsers.delete(userId);
        break;
      }
    }
    console.log("User Disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
