const { Socket } = require('dgram');
const express = require('express');
const http=require('http');
const { userInfo } = require('os');
const { off } = require('process');
const app=express();
const server=http.createServer(app);
const socketIo = require("socket.io")
const io = socketIo(server);
    // now our http request will be handled by app 
// and out socket requests will be handlled by io
const user= {};
app.use(express.json());
app.use(express.static("./public"))
io.on('connection', socket =>{
    socket.on('join-room',roomId =>{
        if(!user[roomId]){
            user[roomId]=[];
        }
        user[roomId].push(socket.id);
        const otherUsers= user[roomId].filter(id=>id!==socket.id);
        socket.emit('all-users',otherUsers);

        socket.on('send-offer',({offer,to})=>{
            io.to(to).emit('recive-answer',{offer,from:socket.id});
        })
        socket.on('send-answer', ({ answer, to }) => {
            io.to(to).emit('receive-answer', { answer, from: socket.id });
          });
      
          socket.on('send-candidate', ({ candidate, to }) => {
            io.to(to).emit('receive-candidate', { candidate, from: socket.id });
          });

          socket.on('disconnet',()=>{
            user[roomId]=user[roomId].filter(id=>is!==socket.id);
            socket.broadcast.emit('user-disconnected',socket.id);
          });
    });
});

app.get('/',(req,res)=>{
    res.send('Server is running')
});

server.listen(5000,()=>{
console.log("server is running on port 5000");
});
