import { useEffect, useState } from "react";

export default function Clock(){

    const[time,setTime] = useState(new Date());

    useEffect(()=>{
        const id = setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=>{
            clearInterval(id);
        }
    },[])

    function formatTime(){
        const hour = time.getHours();
        const minute =  time.getMinutes();
        const second = time.getSeconds();

        const includeZero = (number) => number<10 ? "0"+number : number;

        return `${includeZero(hour)}:${includeZero(minute)}:${includeZero(second)}`;
    };

    return(
        <div className="font-bold text-5xl flex justify-center mt-5 mb-5 text-white">
            <h1 className="rounded-xl shadow-black shadow-2xl border-1 border-white px-4 py-2">{formatTime()}</h1>
        </div>
    )
}
