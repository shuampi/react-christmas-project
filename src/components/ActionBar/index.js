import React from "react";
import { useState } from 'react';

function ActionBar({handelName,  isHide}){

  const [name,setName]=useState("");
  
function handelInputName(event){
setName(event.target.value)
console.log(handelName)
}

    return(
        <form className={isHide? "hide":"show-input-window"} id="input-name">
        <label id="label-name">Hero's name</label>
        <input id="hero-text-name" type="text" onChange={handelInputName} value={name}/>
        <button type="button" onClick={()=>{handelName(name); }} id="hero-name-button">Submit</button>
        
      </form>
    )
}

export default ActionBar;