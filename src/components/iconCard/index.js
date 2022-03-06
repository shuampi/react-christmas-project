import React from "react";

function IconCard ({theSrc}){
console.log(`thesrc:${theSrc}`)
    return(
        <img className="icon-card" alt="" src={theSrc}/>
    )
}

export default IconCard;