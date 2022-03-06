import { useState } from "react";

function useShowItemCard() {
  const [showItemCard, setShowItemCard] = useState(false);

  function handelIsShow() {
    setShowItemCard(!showItemCard);
  }
  return { showItemCard, handelIsShow };
}

export default useShowItemCard;