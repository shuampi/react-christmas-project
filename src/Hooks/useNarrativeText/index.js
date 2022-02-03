import { useState } from "react";
//input thestory data
//output the text

function useNarrativeText(storyText, i) {

  const [narrativeText, setNarrativeText] = useState(storyText[i]);

  function handelText(){
    setNarrativeText(storyText[i+1]);
  }
  
  return {narrativeText, handelText}
}

export default useNarrativeText;
