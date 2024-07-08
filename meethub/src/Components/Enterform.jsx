import React from "react";
import "./CSS/eform.css";
const Enterform=()=>{
    return (
        <div className="form">
            <form action="/videocall">
            <input type="text"  placeholder="Enter your name" name="name" />
            <input type="text" placeholder="Enter 6-digit code" name="code" />
            <button type="submit">Enter room</button>
            </form>

        </div>
    );
}
export default Enterform;