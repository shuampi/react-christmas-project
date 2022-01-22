import React from "react";
import { useState } from 'react';

function ActionBar({handelHeroName, handelNarrativeText, handelIsHide}){

  const [name,setName]=useState("");
  
function handelInputName(event){
setName(event.target.value)

}

    return(
        <form className="show-input-window" id="input-name">
        <label id="label-name">Hero's name</label>
        <input id="hero-text-name" type="text" onChange={handelInputName} value={name}/>
        <button type="button" onClick={()=>{handelHeroName(name); handelNarrativeText(); handelIsHide()}} id="hero-name-button">Submit</button>
        
      </form>
    )
}

export default ActionBar;