const express = require('express');
const bodyParser=require('body-parser');
const{Server}=require('socket.io');
const io = new Server({cors:true});
const app = express();
app.use(bodyParser.json());

const joinednames = new Map();
const sockettonames = new Map();

io.on('connection',(socket)=>{
socket.on('joining',(data)=>{
    console.log('new connection');
    const {name,code}=data;
    console.log('user',name,'joined');
    joinednames.set(code,socket.id);
    sockettonames.set(socket.id,name)
    socket.join(code);
    socket.emit('joinme',{code})
    socket.broadcast.to(code).emit('user-joined',{code});
    console.log('join me emitted , broadcast done');
});
socket.on('call-user',(data)=>{
    console.log('call user called')
    const {}=data;
    const socketid = joinednames.get(name);
    const from = sockettonames.get(socket.id);
    socket.to(socketid).emit('incoming',{from : from})
    console.log('incoming from ',from)
})
});


app.listen(5000,()=>{
    console.log('server is running on 5000 port');
})
io.listen(5001,()=>{
    console.log('io server is running on 5001');
})