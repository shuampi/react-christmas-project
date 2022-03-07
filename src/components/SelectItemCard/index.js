import React, { useState, useContext } from "react";
import { stateContext } from "../App/App.js";

function SelectItemCard({
  value1,
  value2,
  value3,
  label,
  showCard,
  handelObjectIcon,
  handelSpellIcon,
  handelIsShow,
  handelShowImg
}) {
  const [theItem, setTheItem] = useState("");
  const [showform, setShowForm]=useState(false);
  function handelChange(event) {
    setTheItem(event.target.value);
    console.log(`theItem in handelchange:${theItem}`)
  }
function handelShowForm(){
  setShowForm(!showform)
}

  // function handelItems() {


  //   if ( theItem !== "") {
  //     handelObjectIcon(theItem);
  //     console.log(`theItem:${theItem}`)
  //     banana({ type: "swaping images" });
  //    handelSpellIcon(theItem)
  //     // console.log(`theItem in handelitem:${theItem}`)
  //   }


  // }
  function handelItems() {
    
    if ( theItem !== "" ) {
      handelObjectIcon(theItem);
     
      banana({ type: "swaping images" });
  
      
    }
  }
  function handelSpells() {
    
    if ( theItem !== "" ) {
      handelSpellIcon(theItem);
     
     
  
      
    }
  }

  const banana = useContext(stateContext);

  return (<>
    <form className={showCard ? "show-input-window" : "hide"}>
      <label htmlFor="selection">{label}</label>
      <select value={theItem} onChange={handelChange} name="items">
        <option value="">Please choose an option</option>
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
        <option value={value3}>{value3}</option>
      </select>
      <button
        onClick={() => {
          handelItems();
         handelIsShow();
         handelShowForm()
        }}
        type="button"
      >
        Submit
      </button>
    </form>
    <form className={showform ? "show-input-window" : "hide"}>
      <label htmlFor="selection">{label}</label>
      <select value={theItem} onChange={handelChange} name="items">
        <option value="">Please choose an option</option>
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
        <option value={value3}>{value3}</option>
      </select>
      <button
        onClick={() => {
          handelSpells()
        handelShowForm()
        handelShowImg()
        }}
        type="button"
      >
        Submit
      </button>
    </form>
   </>
  );
}

export default SelectItemCard;
