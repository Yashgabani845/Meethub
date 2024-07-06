import React from "react";
import "./CSS/Mainview.css"
import meetback from "./meet1.png"
const Mainview=()=>{
return (
<div className="mainview" >
<div className="left">
<div className="title">Integrate customizable video meetings effortlessly</div>
<div className="slogan">Seamlessly embed video calling into your platform via Whereby’s API and SDK, ideal for Telehealth, Digital Mental Health, Coaching, eLearning and more.</div>
<div className="buttons">
    <button className="create">Create Meeting</button>
    <button className="join">Join Via Code</button>
</div>
</div>
<div className="right">
<div className="showimgdiv"><img src={meetback} alt="" className="showimg" /></div>
</div>
</div>
);
}

export default Mainview;