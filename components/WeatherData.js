import React , {useState,useEffect} from 'react'
import './main.css'
export default function WeatherData() {
    const [city , setCity] = useState("India");
    const [searchCity , setSearchCity] = useState("New Delhi");
    const [loc, setLoc] = useState("");
    useEffect(() => {
        const getData =async () =>{
        let url =`http://api.weatherapi.com/v1/current.json?key=f7919c8ac66c47e696f203747220607&q=${!searchCity?"new delhi" : searchCity}`;
        let data = await fetch(url);
        let locData = await fetch(url);
        let parsedData =await data.json();
        let locParsedData =await locData.json();
        setCity(parsedData.current);
        setLoc(locParsedData.location);
    }
        getData();
    },[searchCity])
    
  return (
    <>
      <div className='box'>
      <div className="inputData my-4  ">
      <input type="search" className='inputField' placeholder='Enter City' onChange={ (event) =>{setSearchCity(event.target.value)}}/>
      </div>
       {!city ? (<p>No data Found</p>) :(  
        <div>
      <div className="info">
      <h2 className='location'>
      <i className='fas fa-street-view'>
      <p>{loc.name}</p>
      </i>
      </h2>
      <h1 className="temp">
      <p>Temp : {city.temp_c} °C</p>
      </h1>
      <h3 className="tempmin_max">
      <p>Feels like : {city.feelslike_c} °C</p>
      <p>Humidity in % : {city.humidity} %</p>
      </h3>
      </div>
      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
      </div>
      )}
      </div>
    </>
  )
}
