import React,{useState} from "react";
import "./CSS/eform.css";
import {useSocket} from "../Components/Socket";
const Enterform=()=>{
    const {socket}=useSocket();
    socket.emit('joining',{
            name : "yashgabani",
            code: 505152
    });
    const [name,setname]=useState();
    const [code,setcode]=useState();
    const handlejoinroom=()=>{
          socket.emit('joining',{
                name:name,
                code:code
          })
    }
    return (
       

        <div className="form">
            
            <input type="text" value={name}  onChange={e=>{
                setname(e.target.value)}} className="name" placeholder="Enter your name" name="name" />
            <input type="text"  value={code} onChange={(e)=>{
                setcode(e.target.value)}}className="code" placeholder="Enter 6-digit code" name="code" />
            <button onClick={handlejoinroom}>Enter room</button>
         

        </div>
    );
}
export default Enterform;