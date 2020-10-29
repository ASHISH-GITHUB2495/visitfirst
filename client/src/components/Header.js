import React from "react";
import logo from "./media/logo.png";

function Header()
{
    return(
 <div id="header-container">
 <div id="header">
    <img src={logo} id="header-logo"/> 
  <h1 id="header-text" style={{color:"white"}}>visit First</h1>
  <button id="header-button">About website</button>
  <button id="header-button">About Developer</button>
</div>
</div>
    )

}
export default Header;