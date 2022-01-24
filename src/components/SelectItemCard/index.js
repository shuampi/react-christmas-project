import React, { useState } from "react";

function SelectItemCard({value1, value2, value3, label, isHide}){
  
  

  

  return(
        <form className={isHide? "show-input-window":"hide"} >
        <label   htmlFor="selection">{label}</label>
        <select onChange=""  name="items">
          <option value={value1}>{value1}</option>
          <option value={value2}>{value2}</option>
          <option value={value3}>{value3}</option>
        </select>
        <button onClick="" type="button">Submit</button>
      </form>
    )
}

export default SelectItemCard;
