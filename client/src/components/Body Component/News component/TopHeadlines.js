import React from "react";

function TopHeadlines(){

    
    const [from,setFromDate] = React.useState("");
    const [to,setToDate] = React.useState("");
    const [country,setCountry] = React.useState("in");
    const [word,changeWord] = React.useState("");
    const [category,changeCategory] = React.useState("");
    const [pageCount,changePageCount] = React.useState("20");
    const [data , updateData] = React.useState();
    const [status,updateStatus] = React.useState();
    const [arrive,updateArrive] = React.useState(false);


    const[allow,changeFind] = React.useState(false);

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
       
         const res = await fetch("https://newsapi.org/v2/top-headlines?country="+country+"&q="+word+"&category="+category+"&pageSize="+pageCount+"&apiKey=3dc31574c05348d498ecf68edcf05115");
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
       console.log(to)
       console.log(country);
       console.log(category);
       console.log(pageCount);
    }




    return (<div class="news-search">

<label style={{color:"white",paddingRight:"1%"}}>Keyword:</label>
     <input placeholder={"Search your text"} onChange={event => changeWord(event.target.value)}></input>
     <br />
     <label style={{color:"white",paddingRight:"1%"}}>From:</label>
     <input  style={{marginRight:"5%"}} selected={from} onChange={event => setFromDate(event.target.value)} type="date" id="from" ></input>
     <tab />
     <label style={{color:"white",paddingRight:"1%"}}>To:</label>
     <input selected={to} onChange={event => setToDate(event.target.value)} type="date" id="to"></input>
     <br />
     <label style={{color:"white",paddingRight:"1%"}}>Country:</label>
     <select id="country"  onChange={event => setCountry(event.target.value)} >
            <option value="ar">Argentina</option>
            <option value="au">Australia</option>
            <option value="at">Austria</option>
            <option value="be">Belgium</option>
            <option value="br">Brazil</option>
            <option value="bg">Bulgeria</option>
            <option value="ca">Canada</option>
            <option value="cn">China</option>
            <option value="co">Coloumbia</option>
            <option value="cu">Cuba</option>
            <option value="cz">Czech Republic</option>
            <option value="eg">Egypt</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
            <option value="gr">Greece</option>
            <option value="hk">Hong Kong</option>
            <option value="hu">Hungary</option>
            <option value="in" selected>India</option>
            <option value="id">Indonasia</option>
            <option value="ie">Ireland</option>
            <option value="il">Israel</option>
            <option value="it">Italy</option>
            <option value="jp">Japan</option>
            <option value="lv">Latvia</option>
            <option value="lt">Lithuania</option>
            <option value="my">Malaysia</option>
            <option value="mx">Mexico</option>
            <option value="ma">morooco</option>
            <option value="nl">Netherlands</option>
            <option value="nz">New Zealand</option>
            <option value="ng">Nizeria</option>
            <option value="no">Norway</option>
            <option value="ph">Phillippines</option>
            <option value="pl">Poland</option>
            <option value="pt">Portuagal</option>
            <option value="Ro">Romania</option>
            <option value="ru">Russia</option>
            <option value="sa">Saudi Arabia</option>
            <option value="rs">Serbia</option>
            <option value="sg">Singapore</option>
            <option value="sk">Slovakia</option>
            <option value="si">Slovenia</option>
            <option value="za">South Africa</option>
            <option value="kr">South Korea</option>
            <option value="se">Sweden</option>
            <option value="ch">Switzerland</option>
            <option value="tw">Taiwan</option>
            <option value="th">Thailand</option>
            <option value="tr">Turkey</option>
            <option value="ae">UAE</option>
            <option value="ua">Ukraine</option>
            <option value="gb">United Kingdom</option>
            <option value="us">United States</option>
            <option value="ve">Venuzuela</option>
     </select>
     <br />
     <label style={{color:"white",paddingRight:"1%"}}>Category:</label>
     <select id="sortCategory" onChange={event => changeCategory(event.target.value)} >
            <option value="business" >Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general" selected>General</option>
            <option value="health" >Health</option>
            <option value="science">Science</option>
            <option value="sports" >Sports</option>
            <option value="technology" >Technology</option>
     </select>
     <br />
     <label style={{color:"white",marginRight:"1%"}}>Total pages:</label>
     <input type="number" placeholder="Enter no. of pages" onChange={event => changePageCount((event.target.value).toString())}></input>
     <br />
      
     <button onClick={handleSearch}>Search</button>
     <hr style={{border: "1px solid white"}} />
       
         
     { (allow === true) ?
         (status === "ok") ? data.map(createNews) :
           <h1>wrong query</h1>
           :
           (arrive === false) ?
       <h1> ...Search News...</h1> :
        <h1> ...getting results...</h1>
     }

      
    </div>);

}
 export default TopHeadlines;