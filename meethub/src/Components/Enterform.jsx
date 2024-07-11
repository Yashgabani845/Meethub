import React,{useEffect, useState,useCallback} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./CSS/eform.css";
import {useSocket} from "../Components/Socket";
const Enterform=()=>{
    const {socket}=useSocket();
    const navigate = useNavigate();
   
    const [name,setname]=useState();
    const [code,setcode]=useState();

    const handlejoined=useCallback(({code})=>{
        console.log('joined');
        navigate(`meeting/${code}`)
    },[navigate]);
    useEffect(()=>{
        socket.on("joinme",handlejoined)
        return ()=>{
            socket.off("joinme",handlejoined)
        }
    },[socket])


    const handlejoinroom=()=>{
          socket.emit("joining",{
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