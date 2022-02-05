import "./App.css";
import HeroStatusBar from "../herosStatusBar/index";
import NarrativeBlock from "../NarrativeBlock";
import ActionBar from "../ActionBar";
import SelectItemCard from "../SelectItemCard";
import Modal from "../Modal";
import { useState } from "react";
import { modalData } from "../storyChapterData";
import useHeroName from "../../Hooks/useHeroName";
import useTypeModal from "../../Hooks/useTypeModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [theSrc, setTheSrc] = useState("");
  const { isHide, heroName, narrativeText, handelName } = useHeroName("Hero");
  const {handelInfoModal,typeModal}=useTypeModal(modalData,0)
 

  function handelShowModal() {
    setShowModal(!showModal);
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
        handelInfoModal={handelInfoModal}//
        isHide={isHide}
        narrativeText={narrativeText}
        handelShowModal={handelShowModal}
        modalData={modalData}
      />
      <ActionBar isHide={isHide} handelName={handelName} />
      <SelectItemCard
        handelObjectIcon={handelObjectIcon}
        isHide={isHide}
        label="Select an object:"
        value1="The Warrior Shield"
        value2="The Magic Rope"
        value3="A Bag Full Of Coins"
      />
      <Modal
        typeModal={typeModal}//
        showModal={showModal}
        handelShowModal={handelShowModal}//
      />
    </div>
  );
}

export default App;
