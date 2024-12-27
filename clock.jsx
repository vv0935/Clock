
import { useState, useEffect } from "react";
export default function Clock() {
    function formatTime(){
        let hours=new Date().getHours();
        const min=new Date().getMinutes();
        const sec=new Date().getSeconds();
        const meridian = hours>12 ? "PM" : "AM";
        hours=hours%12 || 12;
        return `${padzero(hours)}:${padzero(min)}:${padzero(sec)} ${meridian}`;
    }
    function padzero(num){
        return num<10?`0${num}`:`${num}`
    }
    const [time, setTime] = useState(new Date());
    useEffect(()=>{
        const inter = setInterval(()=>{
            setTime(formatTime)
        },1000)
        return ()=>{
            clearInterval(inter);
        }     
    }, []); 
    return (
        <>
            <div className="clock">
                <div className="clock-contain">
                <span>{formatTime()}</span>    
                </div>
            </div>
        </>
    );
}