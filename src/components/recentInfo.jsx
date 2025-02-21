export default  function RecentInfo({weather}){
    return(
        <div className="flex w-[20%] rounded-2xl mt-20 p-2 shadow-xl border-[0.1px] border-white text-white min-w-[250px]">
            <div>
                <p>{weather.city}</p>
                <p>{weather.weather[0].main}</p>
                <p className="font-bold text-5xl mt-4">{Math.round(weather.main.temp)}°</p>
             </div>
             <div className="mt-10 ml-10">
                <h2 className="font-[600]">Details<hr /></h2>
                <p>Wind- {weather.wind.speed}m/s</p>
                <p>Visibility- {weather.visibility}m</p>
                <p>Humidity- {weather.main.humidity}%</p>
             </div>
        </div>
    )
}