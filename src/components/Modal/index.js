import React from "react";
import {useContext} from "react"
import {stateContext} from "../App/App.js"


function Modal({showModal,typeModal}){

const dispatch=useContext(stateContext);

  return(
    <div className={showModal?"modal":"hide" } id="shield-modal" data-modal-ref="shield">
      <div className="modal-dialog">
        <header className="modal-header">{typeModal.modalHeader}</header>
        <section className="modal-content">
          <p>
            {typeModal.modalText}
          </p>
        </section>
        <footer className="modal-footer">
          <button onClick={()=>{dispatch({type:"hiding modal"})}} className="close-modal" >Close</button>
        </footer>
      </div>
    </div>
)

}

export default Modal;