import React, { useState, useContext } from "react";
import { stateContext } from "../App/App.js";
import swal from "sweetalert";
function SelectItemCard({
  value1,
  value2,
  value3,
  label,
  showCard,
  handelObjectIcon,
  handelSpellIcon,
  handelIsShow,
  handelShowImg,
  setHideText,
  setHideAction,
}) {
  const [theItem, setTheItem] = useState("");
  const [theItem1, setTheItem1] = useState("");

  const [showform, setShowForm] = useState(false);
  
  function handelChangeSpell(event) {
    setTheItem1(event.target.value);
    console.log(`theItem1 in handelchangeSpell:${theItem1}`);
  }

  function handelChange(event) {
    setTheItem(event.target.value);
    console.log(`theItem in handelchange:${theItem}`);
  }
  function handelShowForm() {
    setShowForm(!showform);
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
    if (theItem !== "") {
      handelObjectIcon(theItem);
      console.log(`the object before:${theItem}`);
      banana({ type: "swaping images" });
      handelIsShow();
      handelShowForm();
      setTheItem("")
      console.log(`the object after:${theItem}`);
    } else {
      swal(`Please, select an object`);
    }
  }
  function handelSpells() {
    if (
      theItem1 !== "" 
    ) {
      console.log(`the spell:${theItem1}`)
      handelSpellIcon(theItem1);
      handelShowForm();
      handelShowImg();
      setHideText(true);
      setHideAction(true);
    } else {
      swal(`Please, select a spell`);
    }
  }

  const banana = useContext(stateContext);

  return (
    <>
      <form className={showCard ? "show-input-window" : "hide"}>
        <label htmlFor="selection">{label}</label>
        <select value={theItem} onChange={handelChange} name="items" required>
          <option value="">Please choose an option</option>
          <option value={value1}>{value1}</option>
          <option value={value2}>{value2}</option>
          <option value={value3}>{value3}</option>
        </select>
        <button
          onClick={() => {
            handelItems();
          }}
          type="button"
        >
          Submit
        </button>
      </form>
      <form className={showform ? "show-input-window" : "hide"}>
        <label htmlFor="selection">{label}</label>
        <select value={theItem1} onChange={handelChangeSpell} name="items" required>
          <option value="">Please choose an option</option>
          <option value={value1}>{value1}</option>
          <option value={value2}>{value2}</option>
          <option value={value3}>{value3}</option>
        </select>
        <button
          onClick={() => {
            handelSpells();
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
