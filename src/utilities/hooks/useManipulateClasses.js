import { useEffect } from 'react';

const useManipulateClasses = (element, addClasses = [], removeClasses = []) => {
  useEffect(() => {
    if (addClasses.length > 0) {
      addClasses.map((x) => element.current.classList.add(x));
    }
    if (removeClasses.length > 0) {
      removeClasses.map((x) => element.current.classList.remove(x));
    }

    return element;
  }, [element, addClasses, removeClasses]);
};

export default useManipulateClasses;
