/** @format */

import "./App.css";
import HeroStatusBar from "../herosStatusBar/index";
import NarrativeBlock from "../NarrativeBlock";
import ActionBar from "../ActionBar";
import SelectItemCard from "../SelectItemCard";
import Modal from "../Modal";
import { useState } from "react";
import { theStory, modalData } from "../storyChapterData";

function App() {
  const [heroName, setHeroName] = useState("Hero");
  const [narrativeText, setNarrativeText] = useState(theStory[0]);
  const [isHide, setIsHide] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [typeModal,setTypeModal]=useState(modalData)

  function handelInfoModal (alt){
    if(alt==="a shield"){
      setTypeModal(modalData[0])
    } else if (alt==="a rope"){
      setTypeModal(modalData[1])
    } else if (alt==="a bag of coins"){
      setTypeModal(modalData[2])
    }
    
  }

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
        handelInfoModal={handelInfoModal}
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
      <Modal 
         typeModal={typeModal}
         showModal={showModal}
         handelShowModal={handelShowModal}
      />
      
    </div>
  );
}

export default App;
