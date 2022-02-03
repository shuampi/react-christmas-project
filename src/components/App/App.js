import "./App.css";
import HeroStatusBar from "../herosStatusBar/index";
import NarrativeBlock from "../NarrativeBlock";
import ActionBar from "../ActionBar";
import SelectItemCard from "../SelectItemCard";
import Modal from "../Modal";
import { useState } from "react";
import { theStory, modalData } from "../storyChapterData";
import useHide from "../../Hooks/useHide";
import useNarrativeText from "../../Hooks/useNarrativeText";

function App() {
  const [heroName, setHeroName] = useState("Hero");
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState(modalData);
  const [theSrc, setTheSrc] = useState("");
  const { isHide, handelIsHide } = useHide();
  const { narrativeText, handelText } = useNarrativeText(theStory, 0);

  function handelInfoModal(alt) {
    if (alt === "a shield") {
      setTypeModal(modalData[0]);
    } else if (alt === "a rope") {
      setTypeModal(modalData[1]);
    } else if (alt === "a bag of coins") {
      setTypeModal(modalData[2]);
    }
  }

  function handelShowModal() {
    setShowModal(!showModal);
  }

  function handelHeroName(thename) {
    if (thename.length > 0 && thename.length <= 10) {
      setHeroName(thename);
      handelText();
      handelIsHide();
    } else {
      alert(`Please, insert a valid name`);
    }
  }

  function handelObjectIcon(item) {
    if (item === "The Warrior Shield") {
      setTheSrc("/images/shield.jpg");
    } else if (item === "The Magic Rope") {
      setTheSrc("/images/rope.jpg");
    } else if (item === "A Bag Full Of Coins") {
      setTheSrc("/images/bagcoins2.jpg");
    }
  }

  return (
    <div className="App">
      <HeroStatusBar theSrc={theSrc} heroName={heroName} />
      <NarrativeBlock
        handelInfoModal={handelInfoModal}
        isHide={isHide}
        narrativeText={narrativeText}
        handelShowModal={handelShowModal}
      />
      <ActionBar isHide={isHide} handelHeroName={handelHeroName} />
      <SelectItemCard
        handelObjectIcon={handelObjectIcon}
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
