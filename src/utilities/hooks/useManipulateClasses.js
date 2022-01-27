import { useEffect } from 'react';

const useManipulateClasses = (element, addClasses = [], removeClasses = []) => {
  useEffect(() => {
    let isFetched = true;

    if (isFetched) {
      if (addClasses.length > 0) {
        addClasses.map((x) => element.current.classList.add(x));
      }
      if (removeClasses.length > 0) {
        removeClasses.map((x) => element.current.classList.remove(x));
      }

      return element;
    }

    return () => (isFetched = false);
  }, [element, addClasses, removeClasses]);
};

export default useManipulateClasses;
