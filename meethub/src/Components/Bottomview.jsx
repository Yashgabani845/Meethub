import React from "react";
import "./CSS/Bottom.css";
import chat1 from "./chat1.png";
import custom from "./custom.png";
const Bottomview = ()=>{
    return(
        <div className="bottom">
         <div className="bottomtitle">Customize Your Options as per your need</div>
      <div className="bottomshow">
        <div className="bottomcard"><img className="bcardimg" src={chat1} alt="" />
        <div className="bcarddesc">
        <span className="bdesctitle">Live chatting</span>
        <span className="bdesccontent">Real-time text communication between users for immediate interaction.
</span>
        </div>
        </div>
        <div className="bottomcard"><img lassName="bcardimg" src={custom} alt="" />
        <div className="bcarddesc">
        <span className="bdesctitle">Customization</span>
        <span className="bdesccontent">Personalization options allowing users to modify features or appearance to suit their preferences.
</span>

        </div>
        </div>
       
      </div>
        </div>
    );
}
export default Bottomview;