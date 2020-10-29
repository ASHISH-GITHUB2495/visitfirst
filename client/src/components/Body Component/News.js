import React from "react";
import NewsChose from "./News component/NewsChose"


function News(){
     const [cos1,update1] = React.useState({color:"orange",backgroundColor:"white"});
     const [cos2,update2] = React.useState({color:"orange",backgroundColor:"white"});
     const [cos3,update3] = React.useState({color:"orange",backgroundColor:"white"});
  

       const [chosen,updateChosen] = React.useState(0);


    function click1(){
          update1({color:"white",backgroundColor:"orange" });
          update2({color:"orange",backgroundColor:"white"});
          update3({color:"orange",backgroundColor:"white"});
          updateChosen(1);
    }
    function click2(){
     update2({color:"white",backgroundColor:"orange" });
     update1({color:"orange",backgroundColor:"white"});
     update3({color:"orange",backgroundColor:"white"});
     updateChosen(2);
    }
    function click3(){
     update3({color:"white",backgroundColor:"orange" });
     update2({color:"orange",backgroundColor:"white"});
     update1({color:"orange",backgroundColor:"white"});
     updateChosen(3);
    }





     return <div class="news-search">
         <h2 style={{color:"white"}}>*** Search News Around the World ***</h2>
         <hr style={{border: "1px solid white"}} />
             <button class="news-button" style={cos1} onClick={click1}>Top Headlines</button>
             <button class="news-button" style={cos2} onClick={click2} >Specific</button>
             <button class="news-button" style={cos3} onClick={click3} >News Sources</button>      
          <hr style={{border: "1px solid white"}} />
          <NewsChose chosen={chosen} />



     </div>;

}
export default News;