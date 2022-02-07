import { useState } from "react";



function useIconImages({state}){
    const [theSrc, setTheSrc] = useState("");

    function handelObjectIcon(item) {
        if (item === state.selectionImages[0].modalHeader) {
          setTheSrc(state.selectionImages[0].src);
        } else if (item === state.selectionImages[1].modalHeader) {
          setTheSrc(state.selectionImages[1].src);
        } else if (item === state.selectionImages[2].modalHeader) {
          setTheSrc(state.selectionImages[2].src);
        }
      }

return {theSrc, handelObjectIcon}
}

export default useIconImages;