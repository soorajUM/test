import Button from '../../Components/Button';
import { useRef, useState } from "react";

const Time = () => {
    const [time, settime] = useState(0);
    const timerRef = useRef<any>();

    const starttimer = ()=>{
        timerRef.current = setInterval(() => settime(timer => timer + 1), 1000)
      }
      const stoptimer=()=>{
        clearInterval(timerRef.current)
      }
      const resettimer=()=>{settime(0)}
  return (
    <div className='p-4'> 
         {Math.floor(time/60)}min {time%60}sec
    <div className="App">
      <Button label="start"onClick={starttimer}/> 
      <Button label="stop"onClick={stoptimer}/>
      <Button label="reset"onClick={resettimer}/>
    </div>
    </div>
  )
}

export default Time