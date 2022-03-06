//
import { useState } from "react";
import useHide from "../useHide";
import useShowItemCard from "../useShowItemCard";
import useNarrativeText from "../useNarrativeText";
import { theStory } from "../../components/storyChapterData";

function useHeroName(aName) {
  const [heroName, setHeroName] = useState(aName);
  const { isHide, handelIsHide } = useHide();
  const{showItemCard,handelIsShow}=useShowItemCard();
  const { narrativeText, handelText } = useNarrativeText(theStory, 0);
  
  function handelName(aName) {
    if (aName.length > 0 && aName.length <= 10) {
      setHeroName(aName);
      handelIsHide();
      handelText();
      handelIsShow();

     
    } else {
      return alert(`Please, insert a valid name`);
    }
  }
  return { isHide,showItemCard, heroName, narrativeText, handelName, handelIsShow };
}

export default useHeroName;
