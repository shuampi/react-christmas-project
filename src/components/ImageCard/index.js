/** @format */

import React from "react";
//import { useContext } from "react";
//import {ObjectsContext} from "../App/App.js"

function ImageCard({ src, alt, isHide, handelShowModal,  handelInfoModal}) {
  //const dispatch=useContext(ObjectsContext)
     return (
    <img
      onClick={() => {
        handelShowModal();
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
