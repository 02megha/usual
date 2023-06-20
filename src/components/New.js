import  {useState } from "react";



const New = ()=> {
    const [counter , setcounter] = useState (0);
    console.log("This is proof that components is re-rendered")
    
      

    return (
        <>

<h1 className = "level"> Level = </h1>
    <button className = "click" onClick  = {() => setcounter ( counter +20  )}>  high+</button> 
    <button onClick = {() => setcounter ( counter -5)}> low-</button>
    
    <button onClick = {() => setcounter ( counter +20 , -5)}> medium =</button>

            <h2 className = " heading"> The Current Count  {counter} </h2>
            
             <button onClick = {() => setcounter ( counter + 1)}> Increment+</button>
<button onClick = {() => setcounter ( counter -1)}> Decrement-</button>

        </>
        
    );
};

export default New;