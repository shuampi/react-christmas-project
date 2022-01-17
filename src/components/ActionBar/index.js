import React from "react";

function ActionBar(){

    return(
        <form className="show-input-window" id="input-name">
        <label id="label-name">Hero's name</label>
        <input id="hero-text-name" type="text"  />
        <input id="hero-name-button" type="button" value="submit" />
      </form>
    )
}

export default ActionBar;