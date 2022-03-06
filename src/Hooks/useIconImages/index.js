import { useState } from "react";

function useIconImages(modalData, spellsModalData) {
  const [theSrc, setTheSrc] = useState("");
  const [spellSrc, setSpellSrc] = useState("");

  function handelObjectIcon(item) {
    if (item === modalData[0].modalHeader) {
      setTheSrc(modalData[0].src);
    } else if (item === modalData[1].modalHeader) {
      setTheSrc(modalData[1].src);
    } else if (item === modalData[2].modalHeader) {
      setTheSrc(modalData[2].src);
    }
    console.log(`theSrc in useiconimgage:${theSrc}`);
  }
  function handelSpellIcon(item) {
    if (item === spellsModalData[0].modalHeader) {
      setSpellSrc(spellsModalData[0].src);
    } else if (item === spellsModalData[1].modalHeader) {
      setSpellSrc(spellsModalData[1].src);
    } else if (item === spellsModalData[2].modalHeader) {
      setSpellSrc(spellsModalData[2].src);
    }
  }

  return { theSrc, spellSrc, handelObjectIcon, handelSpellIcon };
}

export default useIconImages;
