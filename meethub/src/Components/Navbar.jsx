import React from "react";
import "./CSS/Navbar.css";
import logo from  "./meethub.png"
function Navbar (){
    return(
<div>
<nav>
<div className="logodiv"><img src={logo} className="logo" alt="logo" /></div>
<div className="search"><input type="text" /></div>

<div className="history">history</div>
<div className="setting">setting</div>
</nav>
</div>
    );
}
export default Navbar;