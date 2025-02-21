export default function Forecast({weather}){
    const list = weather.list
    return(
        <div className="mt-20">
            <h1 className="text-white text-2xl font-bold ml-10">Forecast :</h1>
            <div className="flex overflow-x-scroll w-[90vw] p-5">
                {list.map((data)=>{
                    const[date,time] = data.dt_txt.split(" ");
                    return(
                        <div key={data.dt_txt} className="shadow-xl flex p-2 text-white border-1 border-white mr-5 rounded-xl min-w-[300px] ">
                            <div>
                                <p className="font-[550]">Date: {date}</p>
                                <p className="font-[550]">Time: {time}</p>
                                <p className="text-4xl mt-4 font-bold">{Math.round(data.main.temp)}°</p>
                            </div>
                            <div className="ml-5 mt-10">
                                <h2 className="font-[600]">Details<hr /></h2>
                                <p>wind- {data.wind.speed}m//s</p>
                                <p>visibility- {data.visibility}m</p>
                                <p>Humidity- {data.main.humidity}%</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            </div>
    )
}