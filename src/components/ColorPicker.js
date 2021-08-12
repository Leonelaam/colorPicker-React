
import React, { useState } from "react";

const ColorPicker = () => {
    const[color, setColor]= useState("");
    
  
    return ( 
        <div style={{background:color, width: "80%", height:"30rem"}}>
            <div className="text-center">
                <h1>ColorPicker</h1>
                <input type="color" onChange={(e)=>setColor(e.target.value)}/> 
            </div>   
        </div>
     );
}
 
export default ColorPicker;