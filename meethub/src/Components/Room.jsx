import React,{useEffect,useCallback} from "react";
import { useSocket } from "./Socket";
import { usePeer } from "./Peer";

const Room = ()=>{

const {socket} = useSocket();
const {peer,createOffer} = usePeer();


const handleNewUserJoined = useCallback( async(data)=>{
const {name}=data; 
console.log('new user joined',name)
const offer = await createOffer();
console.log(offer)
socket.emit("call-user",{name,offer}); 
},[createOffer,socket]);


const handleincoming = useCallback((data)=>{
    const {from,offer} =data;
console.log("incoming call from ",from,offer)
},[])



useEffect(()=>{
socket.on("user-joined",handleNewUserJoined);
socket.on("incoming",handleincoming);
},[socket])



    return(
        <div>
        <h1>inside the room</h1>
        </div>
    )
}
export default Room;