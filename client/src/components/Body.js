import React from "react";
import WheatherInfo from "./Body Component/WheatherInfo";
import JobPortal from "./Body Component/JobPortal";
import News from "./Body Component/News";

function Header()
{
    return(
 <div class="body-plate">
   <div class="row ">
       <div class="col first">
           <WheatherInfo />

       </div>

       <div class="col-6 second">
           <News />
       </div>
       <div class="col third">
         <JobPortal />
        </div>
    
   </div>   
</div>
    )

}
export default Header;