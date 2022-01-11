import { useEffect } from "react";

const useOutsideClickToClose = (ref, onOutsideClick) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onOutsideClick();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, onOutsideClick]);
};

export default useOutsideClickToClose;
