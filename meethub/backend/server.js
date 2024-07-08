const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000", // Frontend URL
    methods: ["GET", "POST"]
  }
});

app.use(cors({
  origin: "http://localhost:3000", // Frontend URL
}));

const users = {};

io.on('connection', socket => {
  socket.on('join-room', roomId => {
    if (!users[roomId]) {
      users[roomId] = [];
    }
    users[roomId].push(socket.id);

    const otherUsers = users[roomId].filter(id => id !== socket.id);

    socket.emit('all-users', otherUsers);

    socket.on('send-offer', ({ offer, to }) => {
      io.to(to).emit('receive-offer', { offer, from: socket.id });
    });

    socket.on('send-answer', ({ answer, to }) => {
      io.to(to).emit('receive-answer', { answer, from: socket.id });
    });

    socket.on('send-candidate', ({ candidate, to }) => {
      io.to(to).emit('receive-candidate', { candidate, from: socket.id });
    });

    socket.on('disconnect', () => {
      users[roomId] = users[roomId].filter(id => id !== socket.id);
      socket.broadcast.emit('user-disconnected', socket.id);
    });
  });
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
