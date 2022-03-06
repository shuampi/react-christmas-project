import React from "react";
import { useState } from 'react';

function ActionBar({handelName,  isHide}){

  const [name,setName]=useState("");
  
function handelInputName(event){
  
setName(event.target.value)
console.log(handelName)
}

    return(
      // set hero name, hide when the name is submitted
        <form className={isHide? "hide":"show-input-window"} id="input-name">
        <label id="label-name">Enter a name</label>
        <input id="hero-text-name" type="text" placeholder="please,enter a name" onChange={handelInputName}/>
        <button type="button" onClick={()=>{handelName(name); }} id="hero-name-button">Submit</button>
        
      </form>
    )
}

export default ActionBar;