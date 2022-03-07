import React from "react";

function SecondActionMenu({ showMenu }) {
  return (
    <form className={showMenu ? "show-input-window":"hide"} >
      
     
      <button type="button" >
        Continue. 
      </button>
    </form>
  );
}

export default SecondActionMenu;
