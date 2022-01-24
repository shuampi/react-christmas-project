import React, { useState } from "react";

function SelectItemCard({value1, value2, value3, label, isHide, handelObjectIcon}){
  
  const [theItem,setTheItem]=useState(value1)

  function handelChange(event){
      setTheItem(event.target.value)
  }

  console.log(theItem)

  return(
        <form className={isHide? "show-input-window":"hide"} >
        <label   htmlFor="selection">{label}</label>
        <select onChange={handelChange}  name="items">
          <option value={value1}>{value1}</option>
          <option value={value2}>{value2}</option>
          <option value={value3}>{value3}</option>
        </select>
        <button onClick={()=>{handelObjectIcon(theItem)}} type="button">Submit</button>
      </form>
    )
}

export default SelectItemCard;
