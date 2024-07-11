import React,{useEffect,useCallback} from "react";
import { useSocket } from "./Socket";
import { usePeer } from "./Peer";

const Room = ()=>{

const {socket} = useSocket();
const {peer,createOffer,createanswer} = usePeer();


const handleNewUserJoined = useCallback( async(data)=>{
const {name}=data; 
console.log('new user joined',name)
const offer = await createOffer();
console.log(offer)
socket.emit("call-user",{name,offer}); 
},[createOffer,socket]);


const handleincoming = useCallback(async(data)=>{
    const {from,offer} =data;
console.log("incoming call from ",from,offer)
const ans = await createanswer();
socket.emit('call-accept',{from:from,ans});
},[createanswer,socket])


const handlecallaccept=useCallback((data)=>{
const {ans}=data;

},[])

useEffect(()=>{
socket.on("user-joined",handleNewUserJoined);
socket.on("incoming",handleincoming);
socket.on("call-accepted",handlecallaccept);
return ()=>{

socket.off('user-joined',handleNewUserJoined);
socket.off('incoming',handleincoming)};
socket.off('call-accepted',handlecallaccept)
},[socket])



    return(
        <div>
        <h1>inside the room</h1>
        </div>
    )
}
export default Room;