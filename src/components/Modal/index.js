import React from "react";
function Modal({showModal, handelShowModal}){
return(
    <div className={showModal?"modal":"hide" } id="shield-modal" data-modal-ref="shield">
      <div className="modal-dialog">
        <header className="modal-header">The Warrior Shield.</header>
        <section className="modal-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            repellendus reprehenderit accusamus totam ratione! Nesciunt, nemo
            dolorum recusandae ad ex nam similique dolorem ab perspiciatis qui.
            Facere, dignissimos. Nemo, ea.
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