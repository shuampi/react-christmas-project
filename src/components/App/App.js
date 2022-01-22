/** @format */

import "./App.css";
import HeroStatusBar from "../herosStatusBar/index";
import NarrativeBlock from "../NarrativeBlock";
import ActionBar from "../ActionBar";
import { useState } from "react";
import { theStory } from "../storyChapterData";

function App() {
  const [heroName, setHeroName] = useState("");
  const [narrativeText, setNarrativeText] = useState(theStory[0]);
  const [isHide, setIsHide] = useState(false);

  function handelIsHide() {
    setIsHide(!isHide);
  }
  function handelHeroName(thename) {
    setHeroName(thename);
  }
  function handelNarrativeText() {
    setNarrativeText(theStory[1]);
  }

  return (
    <div className="App">
      <HeroStatusBar heroName={heroName} />
      <NarrativeBlock isHide={isHide} narrativeText={narrativeText} />
      <ActionBar
        handelHeroName={handelHeroName}
        handelNarrativeText={handelNarrativeText}
        handelIsHide={handelIsHide}
      />
    </div>
  );
}

export default App;
