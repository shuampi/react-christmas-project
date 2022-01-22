import React from "react";

function ImageCard({src, alt, isHide, handelShowModal}){

return(
    
     <img onClick={()=>{handelShowModal()}}className={isHide? "image-card":"hide"} src={src} alt={alt}/>
    
)

}

export default ImageCard;