import {useState} from "react";


function useTypeModal(modalData,spellsModalData, i ){
    const [typeModal, setTypeModal] = useState(modalData);

    function handelInfoModal(alt) {
        if (alt === modalData[i].alt) {
          setTypeModal(modalData[i]);
        } else if (alt === modalData[i+1].alt) {
          setTypeModal(modalData[i+1]);
        } else if (alt === modalData[i+2].alt) {
          setTypeModal(modalData[i+2]);
        } else if (alt === spellsModalData[i].alt) {
          setTypeModal(spellsModalData[i]);
        } else if (alt === spellsModalData[i+1].alt) {
          setTypeModal(spellsModalData[i+1]);
        } else if (alt === spellsModalData[i+2].alt) {
          setTypeModal(spellsModalData[i+2]);
        }
      }
return {handelInfoModal, typeModal}
}
export default useTypeModal;