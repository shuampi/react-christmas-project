import "./App.css";
import HeroStatusBar from "../herosStatusBar/index";
import NarrativeBlock from "../NarrativeBlock";
import ActionBar from "../ActionBar";
import SelectItemCard from "../SelectItemCard";
import Modal from "../Modal";
import { useReducer, useState } from "react";
import React from "react";
import { modalData, spellsModalData, theStory } from "../storyChapterData";
import useHeroName from "../../Hooks/useHeroName";
import useTypeModal from "../../Hooks/useTypeModal";
import useIconImages from "../../Hooks/useIconImages";
import SecondNarrativeBlock from "../SecondNarrativeBlock";
import SecondActionMenu from "../SecondActionMenu";
import BattleModal from "../BattleModal";
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
  const {
    isHide,
    showItemCard,
    heroName,
    narrativeText,
    handelName,
    handelIsShow,
    showImg,
    handelShowImg,
  } = useHeroName("Hero");
  const { handelInfoModal, typeModal } = useTypeModal(
    modalData,
    spellsModalData,
    0
  );
  const [state, dispatch] = useReducer(reducer, initialState);
  const { theSrc, spellSrc, handelSpellIcon, handelObjectIcon } = useIconImages(
    modalData,
    spellsModalData,
    handelIsShow
  ); //use {} when you want use a property
  const [hideText, setHideText] = useState(false);
  const [hideAction, setHideAction] = useState(false);
  const [textChapter, setTextChapter] = useState(theStory[2]);
  const [showBattleModal, setShowBattleModal] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
  const [showFightOptions, setShowFightOptions] = useState(false);
  const [showWayOutForest, setShowWayOutForest] = useState(false);

  function handelWayOutForest() {
    setShowWayOutForest(!showWayOutForest);
  }

  function handelFightOptions() {
    setShowFightOptions(!showFightOptions);
  }

  function handelGameOver() {
    setShowGameOver(!showGameOver);
  }

  function handelTextChapter(i) {
    setTextChapter(theStory[i + 1]);
  }
  function handelBattleModal() {
    setShowBattleModal(!showBattleModal);
  }

  return (
    <div className="App">
      <stateContext.Provider value={dispatch}>
        <HeroStatusBar
          theSrc={theSrc}
          spellSrc={spellSrc}
          heroName={heroName}
        />
        <NarrativeBlock
          hideText={hideText}
          showImg={showImg}
          selectionImages={state.selectionImages}
          handelInfoModal={handelInfoModal}
          isHide={isHide}
          narrativeText={narrativeText}
          modalData={modalData}
        />
        <ActionBar isHide={isHide} handelName={handelName} />
        {/* selection of an object and spell*/}
        <SelectItemCard
          setHideAction={setHideAction}
          setHideText={setHideText}
          handelShowImg={handelShowImg}
          handelIsShow={handelIsShow}
          handelSpellIcon={handelSpellIcon}
          handelObjectIcon={handelObjectIcon}
          showCard={showItemCard}
          label="Select an object:"
          value1={state.selectionImages[0].modalHeader}
          value2={state.selectionImages[1].modalHeader}
          value3={state.selectionImages[2].modalHeader}
        />
        <SecondNarrativeBlock showText={hideText} textChapter={textChapter} />
        <SecondActionMenu
          showWayOutForest={showWayOutForest}
          handelWayOutForest={handelWayOutForest}
          showFightOptions={showFightOptions}
          handelFightOptions={handelFightOptions}
          showGameOver={showGameOver}
          handelGameOver={handelGameOver}
          battleModal={handelBattleModal}
          objectSelected={theSrc}
          setHideAction={setHideAction}
          showMenu={hideAction}
          handelTextChapter={handelTextChapter}
        />
        <Modal
          typeModal={typeModal} //
          showModal={state.showModal}
        />
        <BattleModal
          handelWayOutForest={handelWayOutForest}
          handelFightOptions={handelFightOptions}
          handelGameOver={handelGameOver}
          text={handelTextChapter}
          showBattleModal={showBattleModal}
          battleModal={handelBattleModal}
        />
      </stateContext.Provider>
    </div>
  );
}

export default App;
