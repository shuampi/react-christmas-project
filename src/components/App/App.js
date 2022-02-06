import "./App.css";
import HeroStatusBar from "../herosStatusBar/index";
import NarrativeBlock from "../NarrativeBlock";
import ActionBar from "../ActionBar";
import SelectItemCard from "../SelectItemCard";
import Modal from "../Modal";
import { useState, useReducer } from "react";
import React from "react";
import { modalData, spellsModalData } from "../storyChapterData";
import useHeroName from "../../Hooks/useHeroName";
import useTypeModal from "../../Hooks/useTypeModal";

export const stateContext = React.createContext();

const initialState = {
  showModal: false,
  selectionImages: modalData,
};

function reducer(state, action) {
  switch (action.type) {
    case "showing modal":
      return { ...state, showModal: true };
    case "hiding modal":
      return { ...state, showModal: false };
    case "swaping images":
      return { ...state, selectionImages: spellsModalData };
    default:
      return state;
  }
}

function App() {
  const [theSrc, setTheSrc] = useState("");
  const { isHide, heroName, narrativeText, handelName } = useHeroName("Hero");
  const { handelInfoModal, typeModal } = useTypeModal(
    modalData,
    spellsModalData,
    0
  );
  const [selectionImages, setSelectionImages] = useState(modalData);
  const [state, dispatch] = useReducer(reducer, initialState);

  function handelSwapImages() {
    setSelectionImages(spellsModalData);
    return selectionImages;
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
      <stateContext.Provider value={dispatch}>
        <HeroStatusBar theSrc={theSrc} heroName={heroName} />
        <NarrativeBlock
          selectionImages={selectionImages}
          handelInfoModal={handelInfoModal} //
          isHide={isHide}
          narrativeText={narrativeText}
          modalData={modalData}
        />
        <ActionBar isHide={isHide} handelName={handelName} />
        <SelectItemCard
          handelSwapImages={handelSwapImages}
          handelObjectIcon={handelObjectIcon}
          isHide={isHide}
          label="Select an object:"
          value1="The Warrior Shield"
          value2="The Magic Rope"
          value3="A Bag Full Of Coins"
        />
        <Modal
          typeModal={typeModal} //
          showModal={state.showModal}
        />
      </stateContext.Provider>
    </div>
  );
}

export default App;
