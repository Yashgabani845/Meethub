const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);
const cors = require('cors');
app.use(cors());


server.listen(5010, () => {
    console.log("Server is running on port 5010");
});
