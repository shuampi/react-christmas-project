// 
import { useState, React } from "react";




function useHeroName(aName) {
    const [heroName, setHeroName] = useState("Hero");

    if (aName.length > 0 && aName.length <= 10) {
      setHeroName(aName);
      handelNarrativeText();
      handelIsHide();
    } else {
      alert(`Please, insert a valid name`);
    } 
  }

  export default useHeroName;