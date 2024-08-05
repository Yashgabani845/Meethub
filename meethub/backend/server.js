const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);

const PORT = 5010;

app.use(cors());
app.use(express.json());


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
