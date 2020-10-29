import { json, urlencoded } from "body-parser";
import React,{useEffect}from "react";

function GetWheather(props){
    
   

    const weather=props.data;
    const cod = weather.cod;
   const location =weather.name;
    const icon = weather.weather[0].icon;
    const description = weather.weather[0].description;
    const temp = weather.main.temp;
    const feels_like = weather.main.feels_like;
    const min = weather.main.temp_min;
    const max = weather.main.temp_max;
    const pressure = weather.main.pressure;
    const humidity = weather.main.humidity;
    const windSpeed = weather.wind.speed;
    const icon_url = "http://openweathermap.org/img/wn/"+icon+"@2x.png";


  return(
    <div>
       
  {  (cod === 200) ?        <div className="weatherStyle" style={{position:"relative"}}>
         <h1 style={{color:"white"}}>{location}</h1> 
          <h1 style={{color:"white",fontSize:"4rem"}}>{temp} &#8451;</h1>
           <p style={{color:"white"}}>Min: {min}&#8451; | Max: {max}&#8451; </p>
           <p style={{color:"white"}}>Feels like: {feels_like}&#8451; </p>
           <p style={{color:"white"}}>Pressure: {pressure}hPa </p>
           <p style={{color:"white"}}>humidity: {humidity}% </p>
           <p style={{color:"white"}}>Wind Speed: {windSpeed}m/s </p>
            <h2  style={{color:"white"}} >{description}</h2>
           <img  src={icon_url} class="weatherIcon" />
       </div>  : 
   <div>
     
    </div>
    }

       

       
       
       </div> 


  )
}
export default GetWheather;