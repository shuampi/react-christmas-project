import React from "react";
import swal from "sweetalert";
import style from "./style.module.css";
import { useState } from "react";

function SecondActionMenu({
  battleModal,
  showMenu,
  handelTextChapter,
  setHideAction,
  objectSelected,
  showGameOver,
  handelGameOver,
  handelFightOptions,
  showFightOptions
}) {
  const [showOption, setShowOption] = useState(false);
  // const [showGameOver, setShowGameOver] = useState(false);
  // const [showFightOptions, setShowFightOptions] = useState(false);
  function refreshPage() {
    window.location.reload(false);
  }

  function checkYouHaveARope(item) {
    if (item === "/images/rope.jpg") {
      handelTextChapter(5);
    } else {
      swal(`You don't have the magic rope!`);
    }
  }

  return (
    <>
      <form className={showMenu ? "show-input-window" : "hide"}>
        <button
          type="button"
          onClick={() => {
            handelTextChapter(2);
            setHideAction(false);
            setShowOption(true);
          }}
        >
          Continue.
        </button>
      </form>
      {/* 2 options after click continue*/}
      <form className={showOption ? "show-input-window" : "hide"}>
        <button
          type="button"
          onClick={() => {
            handelTextChapter(3);
            setShowOption(false);
            handelGameOver();
          }}
        >
          Ignore the fight.
        </button>
        <button
          type="button"
          onClick={() => {
            handelTextChapter(4);
            setShowOption(false);
            handelFightOptions();
            console.log(objectSelected);
          }}
        >
          Defend the old man.
        </button>
      </form>

      <form className={showGameOver ? "show-input-window" : "hide"}>
        <div className={style.gameover}>
          <h1>GAME OVER</h1>
          <button type="button" onClick={refreshPage}>
            Try again.
          </button>
        </div>
      </form>

      <form className={showFightOptions ? "show-input-window" : "hide"}>
        {/* check if the rope was selected
         if so=> win the battle and show next chapter
         it not show a message:"you dont have a rope!" */}

        <button
          type="button"
          onClick={() => {
            checkYouHaveARope(objectSelected);
          }}
        >
          Use the rope
        </button>
        {/* create a modal will appear when click melee attack button:
  1. create a modal
  2 add functionality:  */}

        <button
          type="button"
          onClick={() => {
            battleModal();
          }}
        >
          Melee Attack.
        </button>
      </form>
    </>
  );
}

export default SecondActionMenu;
