import { useState } from "react"
import axios from "axios"
function Weather()
{


    const[city,setcity]= useState("")

    const[weather,setweather]= useState("")
    const[temp,settemp]= useState("")
    const[desc,setdesc]= useState("")

    function handleCity(evt){
        setcity(evt.target.value)

    }
    function getWeather(){
         var WeatherData= axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0da22c9182c7015cfdda7240b2744562`)
    
          WeatherData.then(function(success){
            console.log(success.data)
            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)
          })
        }

    return(
          <div className="bg-yellow-200 p-20 ">
            <div className="bg-purple-400 p-10 rounded-md  ">
                <h1 className="text-3xl font-medium  text-yellow-950">Weather Report:</h1>
                <input type="text"onChange={handleCity} className="mt-2 border border-black rounded-md p-1"></input><br></br>
                <button onClick={getWeather}className="bg-black text-white p-2 rounded-md mt-2 hover:bg-yellow-700">Get the Report</button>

                <div className="mt-2">
                    <h1 className="text-2xl mt-5"><b>Weather: </b><span className="text-opacity-100  text-white bg-black font-medium">{weather}</span></h1>
                    <p className="text-2xl mt-5"><b>Temperature: </b><span className="text-opacity-100 text-white bg-black font-medium">{temp}</span></p>
                    <p className="text-2xl mt-5"><b>Description: </b><span className="text-opacity-100 text-white bg-black font-medium">{desc}</span></p>
                </div>
            </div>

          </div>
    )

}

export default Weather