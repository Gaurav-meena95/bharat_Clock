export default function CurrentTime(){
  let time = new Date();

  return (
    <h3>Current Date :- 
      <h2>{time.toLocaleDateString()}</h2>
       and  Time :- 
       <h2>{time.toLocaleTimeString()}</h2></h3>
  )
}