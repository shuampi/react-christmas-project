/** @format */

import React from "react";
import IconCard from "../iconCard";

function HeroStatusBar({ heroName, theSrc, spellSrc}) {
  console.log(heroName);
  return (
    <div className="main_header">
      <h2>{heroName}'s Journey</h2>
      <IconCard theSrc={theSrc}/>
      <IconCard theSrc={spellSrc}/>
    </div>
  );
}

export default HeroStatusBar;
