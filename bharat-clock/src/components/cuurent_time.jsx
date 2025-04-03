export default function CurrentTime(){
  let time = new Date();

  return (
    <h3>Current Date :- 
      <h2 className="date">{time.toLocaleDateString()}</h2>
 Time :- 
       <h2 className="time">{time.toLocaleTimeString()}</h2></h3>
  )
}