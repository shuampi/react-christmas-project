/** @format */

import React from "react";
import IconCard from "../iconCard";

function HeroStatusBar({ heroName }) {
  console.log(heroName);
  return (
    <div className="main_header">
      <h2>{heroName}'s Journey</h2>
      <IconCard/>
    </div>
  );
}

export default HeroStatusBar;
