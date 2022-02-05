import React, { useRef } from 'react';

import useManipulateClasses from '../../utilities/hooks/useManipulateClasses';

const ButtonOrange = ({ children = 'see product', addClass, removeClass, onClick }) => {
  const button_orange = useRef();

  useManipulateClasses(button_orange, addClass, removeClass);

  return (
    <button
      className="bg-orange-full hover:bg-orange-dimmed w-40
         h-12 flex justify-center items-center font-bold text-xsm 
         text-white-full uppercase tracking-style-button"
      onClick={onClick}
      ref={button_orange}>
      {children}
    </button>
  );
};
export default ButtonOrange;
