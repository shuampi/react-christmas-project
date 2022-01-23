import React from "react";

function SelectItemCard({value1, value2, value3, label, isHide}){
    return(
        <form className={isHide? "show-input-window":"hide"} >
        <label   htmlFor="selection">{label}</label>
        <select  name="objects">
          <option value={value1}>{value1}</option>
          <option value={value2}>{value2}</option>
          <option value={value3}>{value3}</option>
        </select>
        <input type="button" value="Submit" />
      </form>
    )
}

export default SelectItemCard;
