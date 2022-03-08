import React from "react";

function BattleModal({ showBattleModal }) {
  return (
    <div
      className={showBattleModal ? "modal" : "hide"}
      
    >
      <div className="modal-dialog">
        <header className="modal-header">Check your battle result.</header>
        <section className="modal-content">
        {/* function that generate a number between 1 to 6 randomly
        it will check the resul
        1 = you lose 
        2= try again 
        3 to 6 = you win the battle 
        if you lose go to lose page
        if you win go to old man page*/}
          <p>
            Rules of the battle: if 1 you loseif 5 try againrest you win.Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <footer className="modal-footer">
          <button onClick={() => {}} className="close-modal">
            Attack!
          </button>
        </footer>
      </div>
    </div>
  );
}

export default BattleModal;
