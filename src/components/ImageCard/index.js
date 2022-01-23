/** @format */

import React from "react";

function ImageCard({ src, alt, isHide, handelShowModal,  handelInfoModal}) {
  
     return (
    <img
      onClick={() => {
        handelShowModal();
        handelInfoModal(alt)
      }}
      className={isHide ? "image-card" : "hide"}
      src={src}
      alt={alt}
    />
  );
}

export default ImageCard;
