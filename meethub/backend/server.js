const express = require('express');
const bodyParser=require('body-parser');
const{Server}=require('socket.io');
const { Socket } = require('socket.io-client');
const io = new Server({cors:true});
const app = express();
app.use(bodyParser.json());

const joinednames = new Map();


io.on('connection',(socket)=>{
socket.on('joining',(data)=>{
    console.log('new connection');
    const {name,code}=data;
    console.log('user',name,'joined');
    joinednames.set(code,socket.id);
    socket.join(code);
    socket.broadcast.to(code).emit('user-joined',{code});
})
});


app.listen(5000,()=>{
    console.log('server is running on 5000 port');
})
io.listen(5001,()=>{
    console.log('io server is running on 5001');
})