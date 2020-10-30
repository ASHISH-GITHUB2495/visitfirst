import React, { useEffect } from "react";


function Headlines(){

    var [news,update] = React.useState([]);
    var [news2,update2] = React.useState([]);
  

  
  
    useEffect(() => {
      async function fetchData() {
        const res = await fetch("/api1");
        res
          .json()
          .then((res) => {
             if(res.status !== "error"){
            for(var i=0;i<10;i++)
              {  
                  update(prevValue => [...prevValue,res.articles[i].title]);
              }
          }
        });

        const res2 = await fetch("/api2");
        res2
        .json()
        .then((res2) => {
           if(res2.status !== "error"){
          for(var i=0;i<10;i++)
            {  
                update2(prevValue => [...prevValue,res2.articles[i].title]);
            }
        }
      });

       
      }



  
      fetchData();
    },[]);


 function createHeadlines(heading)
 {    return <div class="ticker-item">{heading}.</div>;

 }



return (
    <div className="HeadlinesCon">
    
    <div class="row Headline-container">
         <div class="col-2 Headlines-label">
           International Headlines
         </div>
         <div class="col-10 tcontainer">
         
         <div class="ticker-wrap">
         <div class="ticker-move">

           {news.map(createHeadlines)}

          </div>
        </div>

         </div>
      </div>
    
      <div class="row">
         <div class="col-2 Headlines-label">
           National Headlines
         </div>
         <div class="col-10 tcontainer">
         <div class="ticker-wrap">
         <div class="ticker-move">

           {news2.map(createHeadlines)}

          </div>
        </div>

         </div>
      </div>
    
    

    </div>
  
);




}
export default Headlines;