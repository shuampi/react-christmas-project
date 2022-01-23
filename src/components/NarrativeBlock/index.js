/** @format */

import React from "react";
import ImageCard from "../ImageCard";

function NarrativeBlock({ narrativeText, isHide, handelShowModal,  handelInfoModal}) {
 

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
        <ImageCard handelInfoModal={handelInfoModal} handelShowModal={handelShowModal} isHide={isHide} alt="a shield" src="/images/shield.jpg"/>
        <ImageCard handelInfoModal={handelInfoModal} handelShowModal={handelShowModal} isHide={isHide} alt="a rope" src="/images/rope.jpg"/>
        <ImageCard handelInfoModal={handelInfoModal} handelShowModal={handelShowModal} isHide={isHide} alt="a bag of coins" src="/images/bagcoins2.jpg"/>
      </div>
    </div>
  );
}

export default NarrativeBlock;
