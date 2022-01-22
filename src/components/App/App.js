/** @format */

import "./App.css";
import HeroStatusBar from "../herosStatusBar/index";
import NarrativeBlock from "../NarrativeBlock";
import ActionBar from "../ActionBar";
import SelectItemCard from "../SelectItemCard";
import Modal from "../Modal";
import { useState } from "react";
import { theStory } from "../storyChapterData";

function App() {
  const [heroName, setHeroName] = useState("");
  const [narrativeText, setNarrativeText] = useState(theStory[0]);
  const [isHide, setIsHide] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handelShowModal() {
    setShowModal(!showModal);
  }
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
      <NarrativeBlock
        isHide={isHide}
        narrativeText={narrativeText}
        handelShowModal={handelShowModal}
      />
      <ActionBar
        isHide={isHide}
        handelHeroName={handelHeroName}
        handelNarrativeText={handelNarrativeText}
        handelIsHide={handelIsHide}
      />
      <SelectItemCard
        isHide={isHide}
        label="Select an object:"
        value1="The Warrior Shield"
        value2="The Magic Rope"
        value3="A Bag Full Of Coins"
      />
      <Modal showModal={showModal}
         handelShowModal={handelShowModal}
      />
    </div>
  );
}

export default App;
