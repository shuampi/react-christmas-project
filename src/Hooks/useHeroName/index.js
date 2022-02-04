//
import { useState } from "react";
import useHide from "../useHide";
import useNarrativeText from "../useNarrativeText";
import { theStory } from "../../components/storyChapterData";

function useHeroName(aName) {
  const [heroName, setHeroName] = useState(aName);
  const { isHide, handelIsHide } = useHide();
  const { narrativeText, handelText } = useNarrativeText(theStory, 0);

  function handelName(aName) {
    if (aName.length > 0 && aName.length <= 10) {
      setHeroName(aName);
      handelIsHide();
      handelText();

     
    } else {
      return alert(`Please, insert a valid name`);
    }
  }
  return { isHide, heroName, narrativeText, handelName };
}

export default useHeroName;
