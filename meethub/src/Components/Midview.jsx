import React from "react";
import "./CSS/Midview.css";
import solo from "./Image/solo1.png";
import group from "./Image/group.png";
import proff from "./Image/professional.png";
function Midview  (){
   return(
    <div className="midview">
      <div className="midtitle">Industries thriving with embedded video calls</div>
      <div className="showcase">
        <div className="card"><img className="cardimg" src={solo} alt="" />
        <div className="carddesc">
        <span className="desctitle">one-to-one calling</span>
        <span className="desccontent">Direct video or audio communication between two individuals,anytime.
</span>
        </div>
        </div>
        <div className="card1"><img lassName="cardimg" src={group} alt="" />
        <div className="carddesc">
        <span className="desctitle">group meeting</span>
        <span className="desccontent">Simultaneous video or audio communication among multiple participants.

</span>

        </div>
        </div>
        <div className="card2"><img lassName="cardimg" src={proff} alt="" />
        <div className="carddesc">
        <span className="desctitle">professional meetings</span>
        <span className="desccontent">Structured and formal virtual gatherings for business or professional purposes.
</span>

        </div>
        </div>
      </div>
    </div>
   );
}

export default Midview;