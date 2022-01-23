import React from "react";


function Modal({showModal, handelShowModal,typeModal}){
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
          <button onClick={()=>{handelShowModal()}} className="close-modal" >Close</button>
        </footer>
      </div>
    </div>
)

}

export default Modal;