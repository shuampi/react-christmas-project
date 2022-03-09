import React from "react";
import swal from "sweetalert";
// import Dice from "../Dice";
// import {useState} from "react";

function BattleModal({
  showBattleModal,
  text,
  battleModal,
  handelGameOver,
  handelFightOptions,
}) {
  /* function that generate a number between 1 to 6 randomly
        it will check the resul
        1 = you lose 
        2= try again 
        3 to 6 = you win the battle 
        if you lose go to lose page
        if you win go to old man page*/

  // const [dice, setDice]=useState()
  // function random(){
  //     return Math.floor(Math.random() * 3 + 1)
  // }

  function throwDice() {
    const dice = Math.floor(Math.random() * 6 + 1);
    console.log(`dice:${dice}`);
    if (dice === 1) {
      text(6);
      swal(`${dice} you lose`);
      battleModal();
      handelGameOver();
      handelFightOptions();
      console.log(`you lose! ${dice}`);
      return dice;
    } else if (dice === 2) {
      console.log(`you get  ${dice}`);
      return dice;
    } else if (dice < 4) {
      console.log(`you win  ${dice}`);
      return dice;
    }
  }

  return (
    <div className={showBattleModal ? "modal" : "hide"}>
      <div className="modal-dialog">
        <header className="modal-header">Check your battle result.</header>
        <section className="modal-content">
          <h1></h1>
          <p>
            Rules of the battle: if 1 you loseif 5 try againrest you win.Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <footer className="modal-footer">
          <button
            onClick={() => {
              throwDice();
            }}
            className="close-modal"
          >
            Attack!
          </button>
        </footer>
      </div>
    </div>
  );
}

export default BattleModal;
