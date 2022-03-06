import React from "react";
import logo from "./logo.png";


function Header()
{
    return(
 <div id="header-container">
 <div id="header" class="row">
    <div  id="header-logo" class="col-2"> 
       <img src={logo} id="header-img" />
     </div>
  <div id="header-text"  class="col-8">
        <h1 style={{color:"white",fontFamily: ("Georgia", "serif"),fontSize:"8em"}}  >visitFirst</h1>
  </div>
  <div class="col-2 header-button"  >
  <a   class="btn"  href="https://github.com/ASHISH-GITHUB2495/visitfirst"  target="_blank" ><span><i class="fab fa-github" style={{color: "rgb(209, 205, 205)" ,fontSize: "3rem"}}></i></span></a>
  <a  class="btn"  href="https://ashish-github2495.github.io/MyPortfolio.github.io/"  target="_blank" ><span><i class="fas fa-code" style={{color: "rgb(209, 205, 205)" ,fontSize: "3rem"}}></i></span></a>
  </div>

</div>
</div>
    )

}
export default Header;