import { weatherApi, weatherKey } from "./components/api"
import RecentInfo from "./components/recentInfo"
import Forecast from "./components/forecast"
import Search from "./components/search"
import { useState } from "react"
import Clock from "./components/Clock.jsx"

function App() {
  
  const[weatherInfo,setWeather] = useState(null)
  const[forecastInfo,setForecast] = useState(null)

  const handleOnInputChange = (newInput)=>{
      
    const[latitude, longitude] = newInput.value.split(" ");

    fetch(`${weatherApi}/weather?lat=${latitude}&lon=${longitude}&appid=${weatherKey}&units=metric`)
    .then(async(response)=>{
      const weatherResponse = await response.json()
      
      setWeather({ city: newInput.label, ...weatherResponse })      

    })   
    
    fetch(`${weatherApi}/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherKey}&units=metric`)
    .then(async(response)=>{
      const forecastResponse = await response.json()
      setForecast(forecastResponse)
      console.log(forecastResponse);
      
    })
  }

  return (
    <>
      <CLock/>
      <div className="flex flex-col items-center justify-center">
        <Search onInputChange={handleOnInputChange}/>
        {weatherInfo ? <RecentInfo weather={weatherInfo}/> : <p className="mt-50 text-xl text-white font-bold">Search to see results</p>}
        {forecastInfo && <Forecast weather={forecastInfo}/>}
      </div>
      
    </>
  )
}

export default App
