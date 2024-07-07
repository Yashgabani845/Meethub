const { Socket } = require('dgram');
const express = require('express');
const http=require('http');
const app=express();
const server=http.createServer(app);
const {Server} = require("socket.io")
const io= new Server(server);
// now our http request will be handled by app 
// and out socket requests will be handlled by io

app.use(express.json());
app.use(express.static("./public"))
io.on('connection',(socket)=>{
    console.log("new user is connected",socket,id);
} )

app.get('/',(req,res)=>{
    res.send('Server is running')
});

server.listen(5000,()=>{
console.log("server is running on port 5000");
});
