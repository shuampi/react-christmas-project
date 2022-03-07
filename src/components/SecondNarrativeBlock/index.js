import React from "react";
import style from "./style.module.css"

function SecondNarrativeBlock({textChapter, showText}) {
  return (
    <div className={showText?"":"hide"}>
      <h1>{textChapter.chapterHeader}</h1>
      <img className={style.img} alt={textChapter.chapterHeader} src={textChapter.src}/>
      <p>{textChapter.chapterText}</p>
    </div>
  );
}

export default SecondNarrativeBlock;
