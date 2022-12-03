import { useRef } from "react";

export function useOnLink() {
  const gnbRef = useRef(null);
  function setGnbRef(ref) {
    if (!ref) return;
    gnbRef.current = ref;
    clickNav();
  }
  function clickNav() {
    function onClickHome(e) {
      if (e.target.id === 'nav-signup') {
        
      } else if (e.target.id === 'nav-home') {

      }
    }
    gnbRef.current.addEventListener('click', onClickHome)
  }
  return setGnbRef;
}