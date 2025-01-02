import {useState,useEffect} from 'react'
function DigitalCLock(){
    const [time,setTime]=useState(new Date())

    useEffect(()=>{
        const intervalid=setInterval(()=>{
            setTime(new Date())
        },1000);

        return ()=>{
            clearInterval(intervalid)
        }
    },[])

    function formattime(){
        let hours=time.getHours();
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        const meridian= time > 12 ? "PM" : "AM "

        hours = hours%12||12;
        return `${padding(hours)}:${padding(minutes)}:${padding(seconds)} ${meridian}`
    }

    function padding(i){
        return (i < 10 ? "0":"")+i 
    }

    return(<>
            <span className="clock-span">{formattime()}</span>
            </>);
}
export default DigitalCLock