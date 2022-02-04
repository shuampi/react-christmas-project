//
import { useState } from "react";
import useHide from "../useHide";
import useNarrativeText from "../useNarrativeText";
import { theStory } from "../../components/storyChapterData";

function useHeroName(aName) {
  const [heroName, setHeroName] = useState("Hero");
  const { isHide, handelIsHide } = useHide();
  const { narrativeText, handelText } = useNarrativeText(theStory, 0);

  if (aName.length > 0 && aName.length <= 10) {
    function handelName(aName) {
      setHeroName(aName);
      handelIsHide();
      handelText();
    }

    return {isHide,
      heroName,
      narrativeText,
      handelName};
  } else {
    return alert(`Please, insert a valid name`);
  }
}

export default useHeroName;
