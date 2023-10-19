import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Btn = () => {
    const[colour,setcolour]=useState("black");
    
    const msg=()=>{
      
        setcolour((colour== "black" )?"white":"black")

    }
 return (

<div style={{backgroundColor: colour, height:"1000px"}}>
      
 <h1>hi how are {colour}</h1>
        <button className="bg-danger" onClick={msg}>ClickMe</button>
    </div>
  )
}

export default Btn