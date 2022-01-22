import React from "react";

function ImageCard({src, alt, isHide}){

return(
    <div >
     <img className={isHide? "image-card":"hide-intro"} src={src} alt={alt}/>
    </div>
)

}

export default ImageCard;