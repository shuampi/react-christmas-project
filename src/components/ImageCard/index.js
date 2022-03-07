import React from "react";
import { useContext } from "react";
import { stateContext } from "../App/App.js";

function ImageCard({ src, alt, showImg, handelInfoModal }) {
  const dispatch = useContext(stateContext);
  return (
    <img
      onClick={() => {
        dispatch({ type: "showing modal" });

        handelInfoModal(alt);
        console.log(alt);
      }}
      className={showImg ? "image-card" : "hide"}
      src={src}
      alt={alt}
    />
  );
}

export default ImageCard;
