import { useEffect, useState } from "react";
export default function CurrentTime() {
  const [currentTime,setCurrenttime] = useState(new Date())
    let inertval = setInterval(()=>{
      setCurrenttime(new Date())
    },1000)
    return ()=> clearInterval(inertval);
  

  return (
    <div>
      <h3>
        Current Date:- <h2 className="date">{currentTime.toLocaleDateString()}</h2>
        Time:- <h2 className="time">{currentTime.toLocaleTimeString()}</h2>
      </h3>
    </div>
  );
}
