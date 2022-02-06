

import React from "react";
import { useContext } from "react";
import {stateContext} from "../App/App.js"

function ImageCard({ src, alt, isHide,  handelInfoModal}) {
  const dispatch=useContext(stateContext)
     return (
    <img
      onClick={() => {
        dispatch({type:"showing modal"});
        //dispatch({type:{alt}})
        handelInfoModal(alt)
        console.log(alt)
      }}
      className={isHide ? "image-card" : "hide"}
      src={src}
      alt={alt}
    />
  );
}

export default ImageCard;
