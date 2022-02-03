import { useState } from "react";
//input thestory data
//output the text

function useNarrativeText(storyText, i) {

  const [narrativeText, setNarrativeText] = useState(storyText[i]);

  setNarrativeText(storyText[i+1]);
  return {narrativeText}
}

export default useNarrativeText;
