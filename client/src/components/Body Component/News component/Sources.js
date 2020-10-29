import React from "react";

function Sources(){

    const [country,setCountry] = React.useState("");
    const [category,changeCategory] = React.useState("");
    const [language,changeLanguage] = React.useState("en");
  
    const[allow,changeFind] = React.useState(false);
    const[status,updateStatus] =React.useState();
    const [data,updateData] = React.useState();
    const[arrive,updateArrive]=React.useState(false);

    function createNews(source){

      return       <div style={{textAlign:"center"}}>
      <div class="row">
        <div calss="col-6" style={{textAlign:"center",marginLeft:"15%",marginRight:"5%"}}>
          <a href={source.url} target="_blank" style={{color:"white",backgroundColor:"blue",padding:"2%",borderRadius:"10px"}}>{source.name}</a>
          <br />
        <label style={{color:"white",margin:"2%"}} >{source.country}</label>
        <label style={{color:"white",margin:"2%"}}>{source.category}</label>
        <label style={{color:"white",margin:"2%"}}>{source.language}</label>
        </div>
         <p class="col-6" style={{color:"white"}}>{source.description}</p>
      </div>
      <hr style={{border: "0.5px solid red"}} />
       
        
      </div>;

    }



     
    async function fetchData2(props) {
       
         const res = await fetch("https://newsapi.org/v2/sources?language="+language+"&country="+country+"&category="+category+"&apiKey=3dc31574c05348d498ecf68edcf05115");
         res
           .json()
           .then((res) => {
              
          console.log(res);
          updateStatus(res.status);
          updateData(res.sources);
          changeFind(true);

           
         });
       }


    function handleSearch(){
       updateArrive(true);
        fetchData2();


       console.log(category);
       console.log(language);
       console.log(country)
    }



return <div class="news-search">

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
    <label style={{color:"white",paddingRight:"1%"}}>Language:</label>
    <select id="Language" onChange={event => changeLanguage(event.target.value)} >
            <option value="ar" >Arabic</option>
            <option value="de">German</option>
            <option value="en" selected>English</option>
            <option value="es" >Spanish</option>
            <option value="fr">French</option>
            <option value="he" >Hebrew</option>
            <option value="it" >Italian</option>
            <option value="nl" >Dutch</option>
            <option value="no" >Norwegian</option>
            <option value="pt" >Portuguese</option>
            <option value="ru" >Russian</option>
            <option value="ud" >Urdu</option>
            <option value="zh" >Chinese</option>
     </select>
    <br />
     
    <button onClick={handleSearch}>Search</button>
    <hr style={{border: "1px solid white"}} />


   
     
    { (allow === true) ?
         (status === "ok") ? data.map(createNews) :
           <h1>wrong query ...</h1>
           :
           (arrive === false) ?
       <h1> ...Search Sources...</h1> :
        <h1> ...getting results... </h1>
     }

</div>;

}
 export default Sources;