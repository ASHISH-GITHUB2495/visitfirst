import React, { useEffect } from "react";
import GetWheather from "./GetWheather";

function WheatherInfo() {
  const [location, update] = React.useState();
  const [data, update2] = React.useState();
  const [allow, updatee3] = React.useState(false);
  const [location2, update4] = React.useState();
  const [lat,updateLat] = React.useState();
  const [long,updateLong]= React.useState();

  

  async function fetchData2(props) {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        props +
        "&appid=9b87c818e06372c17e8220f40bad62d7&units=metric"
    );
    res.json().then((res) => {
      update(props);
      update2(res);
      updatee3(true);
    });
  }

  useEffect(() => {
    getLocation();
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log( "Geolocation is not supported by this browser.");
      }
    }
    
    function showPosition(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      updateLat(position.coords.latitude);
      updateLong(position.coords.longitude);
    }

    


   
    async function fetchData() {
      const res = await fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?"+{lat}+"&"+{long}+"&localityLanguage=en");
      res.json().then((res) => {
        if(res.city === "")
           fetchData2(res.principalSubdivision);
        else
           fetchData2(res.city);
        console.log(res);
      });
    }
    fetchData();
  }, []);

  function handleOnClick() {
    update4("");
    fetchData2(location2);
  }
  function handleChange(event) {
    update4(event.target.value);
  }










  return (
    <div>
      <h2 style={{ color: "white" }}>Weather Reaport</h2>
      <hr style={{ border: "1px solid white" }} />
      <input
        type="text"
        placeholder="search city"
        onChange={handleChange}
        value={location2}
      ></input>
      <button onClick={handleOnClick}>
        <i class="fa fa-search"></i>
      </button>

      {allow === true ? (
        data.cod === 200 ? (
          <GetWheather location={location} data={data} />
        ) : (
          <h3 style={{ color: "white" }}>{data.message}!!!</h3>
        )
      ) : (
        <div>Sorry for inconvinecne :) </div>
      )}
    </div>
  );
}

export default WheatherInfo;
