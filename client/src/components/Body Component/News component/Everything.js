import React from "react";

function Everything(){

        
    const [from,setFromDate] = React.useState("");
    const [to,setToDate] = React.useState("");
    const [word,changeWord] = React.useState("");
    const [sort,changeSort] = React.useState("publishedAt");
    const [pageCount,changePageCount] = React.useState("20");

    const[allow,changeFind] = React.useState(false);
    const [data , updateData] = React.useState();
    const [status,updateStatus] = React.useState();
    const [arrive,updateArrive] = React.useState(false);

    function createNews(news){

      return <div class="TopHeadlineContent">
          <p style={{position:"absolute",right:"5%"}}>Author:- {news.author}</p>
         <h4 style={{position:"absolute",left:"5%"}}>{news.source.name}</h4>
           <br />
          <p style={{marginLeft:"10%",marginRight:"10%",paddingTop:"2%",fontWeight:"bold"}}>{news.title}</p>
          <div class="row" style={{margin:"1%"}}>
          <div class="col-6" style={{textAlign:"center"}} >
               <h6 style={{padding:"2%"}}> {news.description}</h6>
             </div>
                <img class="col-6" style={{objectFit:"cover"}}src={news.urlToImage} />
          
          </div>
          <br />
          <a href={news.url} target="_blank" style={{color:"white",backgroundColor:"blue",padding:"2%",borderRadius:"10px"}}>Read Article</a>
           <br />
           <br />
          <p>{news.publishedAt}</p>
          
          <p>{news.content}</p>
          <hr style={{border: "1px solid white"}} />

      </div>;

    }

     
    async function fetchData2(props) {
       
         const res = await fetch("/api4/?word="+word+"&from="+from+"&to="+to+"&sortBy="+sort+"&pageSize="+pageCount);
         res
           .json()
           .then((res) => {
              
          console.log(res);
          updateData(res.articles);
          changeFind(true);
          updateStatus(res.status);
           
         });
       }


    function handleSearch(){
      updateArrive(true);
        fetchData2();
        

       console.log(word);
       console.log(from);
       console.log(to);
       console.log(sort);
       console.log(pageCount);
    }



return <div class="news-search">

    <label style={{color:"white",paddingRight:"1%"}}>Keyword:</label>
    <input placeholder={"Search your text"} onChange={event => changeWord(event.target.value)}></input><label style={{color:"white"}}>_*must</label>
    <br />
    <label style={{color:"white",paddingRight:"1%"}}>From:</label>
    <input  style={{marginRight:"5%"}} selected={from} onChange={event => setFromDate(event.target.value)} type="date" id="from" ></input>
    <tab />
    <label style={{color:"white",paddingRight:"1%"}}>To:</label>
    <input selected={to} onChange={event => setToDate(event.target.value)} type="date" id="to"></input>
    <br />
    <label style={{color:"white",paddingRight:"1%"}}>Sort By:</label>
    <select id="sortBy" onChange={event => changeSort(event.target.value)} >
           <option value="relevancy" >Relevance</option>
           <option value="popularity">Popularity</option>
           <option value="publishedAt" selected>Newest</option>
    </select>
    <br />
    <label style={{color:"white",marginRight:"1%"}}>Total pages:</label>
    <input type="number" placeholder="Enter no. of pages" onChange={event => changePageCount((event.target.value).toString())}></input>
    <br />
     
    <button onClick={handleSearch}>Search</button>
    <hr style={{border: "1px solid white"}} />


         
    { (allow === true) ?
         (status === "ok") ? data.map(createNews) :
           <h1  style={{color:"cyan"}}>wrong query ... must specify Keyword</h1>
           :
           (arrive === false) ?
       <h1  style={{color:"cyan"}}> ...Search News...</h1> :
        <h1  style={{color:"cyan"}}> ...getting results... </h1>
     }

  </div>;

}
 export default Everything;