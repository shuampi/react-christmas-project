/** @format */

import React from "react";
import IconCard from "../iconCard";

function HeroStatusBar({ heroName, theSrc}) {
  console.log(heroName);
  return (
    <div className="main_header">
      <h2>{heroName}'s Journey</h2>
      <IconCard theSrc={theSrc}/>
    </div>
  );
}

export default HeroStatusBar;
