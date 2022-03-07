import React from "react";
import { useState } from "react";
function SecondActionMenu({ showMenu, handelTextChapter, setHideAction }) {
  const [showOption, setShowOption] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
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

      <form className={showOption ? "show-input-window" : "hide"}>
        <button
          type="button"
          onClick={() => {
            handelTextChapter(3);
            setShowOption(false);
            setShowGameOver(true);
          }}
        >
          Ignore the fight.
        </button>
        <button type="button">Defend the old man.</button>
      </form>
      <form className={showGameOver ? "show-input-window" : "hide"}>
        <h1>GAME OVER</h1>
      </form>
    </>
  );
}

export default SecondActionMenu;
