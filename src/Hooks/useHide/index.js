import { useState } from "react";

function useHide() {
  const [isHide, setIsHide] = useState(false);

  function handelIsHide() {
    setIsHide(!isHide);
  }
  return { isHide, handelIsHide };
}

export default useHide;
