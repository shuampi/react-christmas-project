import { useState } from "react";

function useShowItemsImg() {
  const [showImg, setShowImg] = useState(false);

  function handelShowImg() {
    setShowImg(!showImg);
  }
  return { showImg, handelShowImg };
}

export default useShowItemsImg;