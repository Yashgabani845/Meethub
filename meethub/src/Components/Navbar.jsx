import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import "./CSS/Navbar.css";
import logo from  "./Image/logomeet.png"

function Navbar (){
    return(
<div>
<nav>
<div className="logodiv"><img src={logo} className="logo" alt="logo" /></div>
<div className="searchdiv"><SearchIcon/><input type="text" className="search"  placeholder="search"/></div>

<div className="history">History</div>
<div className="setting">Setting</div>
<div className="profile">Profile </div>
</nav>
</div>
    );
}
export default Navbar;