import React from "react";
import WheatherInfo from "./Body Component/WheatherInfo";
import JobPortal from "./Body Component/JobPortal";
import News from "./Body Component/News";

function Header()
{
    return(
 <div class="body-plate">
   <div class="row ">
       <div class="col-xs-12 col-sm-12 col-md-12 col-lg first ">
           <WheatherInfo />

       </div>

       <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 second">
           <News />
       </div>
       
       <div class="col-xs-5 col-sm-5 col-md-5 col-lg third ">
         <JobPortal />
        </div>
    
   </div>   
</div>
    )

}
export default Header;