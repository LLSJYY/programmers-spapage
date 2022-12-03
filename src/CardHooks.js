import { useRef } from "react";

export function useFlipCard() {
  const cardRef = useRef([]);

  function setCardRef(ref) {
    if (!ref) return;
    cardRef.current.push(ref);
    onClickListener();
  }

  function onClickListener() {
    function listener(e) {
      if (e.target.classList.contains('card')) {
        if (e.target.classList.contains('flip')) {
          e.target.classList.remove('flip')
        } else {
          e.target.classList.add('flip')
        } 
      }
    }    cardRef.current[cardRef.current.length-1].addEventListener('click',
      listener)
    }
  function  RenderContentInCard () {
    
  }

  return setCardRef;
}

