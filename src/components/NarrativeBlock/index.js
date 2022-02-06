/** @format */

import React from "react";
import ImageCard from "../ImageCard";

function NarrativeBlock({ modalData,narrativeText, isHide, handelShowModal,  handelInfoModal, selectionImages}) {
 

  return (
    <div>
      <h1 id="chapter_header">{narrativeText.chapterHeader}</h1>
      <p id="chapter_text">{narrativeText.chapterText}</p>
      <div className="content">
        <img className={isHide? "hide":""} id="hero-image" src="\images\hero4.jpg" alt="the young hero" />
        <p className={isHide? "hide":""} id="hero-description">
          describing the hero. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ImageCard handelInfoModal={handelInfoModal} handelShowModal={handelShowModal} isHide={isHide} alt={selectionImages[0].alt} src={selectionImages[0].src}/>
        <ImageCard handelInfoModal={handelInfoModal} handelShowModal={handelShowModal} isHide={isHide} alt={selectionImages[1].alt} src={selectionImages[1].src}/>
        <ImageCard handelInfoModal={handelInfoModal} handelShowModal={handelShowModal} isHide={isHide} alt={selectionImages[2].alt} src={selectionImages[2].src}/>
      </div>
    </div>
  );
}

export default NarrativeBlock;
