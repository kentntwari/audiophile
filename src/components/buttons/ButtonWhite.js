import React, { useRef } from 'react';
import useManipulateClasses from '../../utilities/hooks/useManipulateClasses';

const ButtonWhite = ({ addClass, removeClass }) => {
  const button_white = useRef();

  useManipulateClasses(button_white, addClass, removeClass);

  return (
    <button
      ref={button_white}
      className="bg-white-full hover:bg-black-full w-40 h-12 flex justify-center items-center font-bold text-xsm text-black-full hover:text-white-full uppercase tracking-style-button  border border-black-full">
      see product
    </button>
  );
};

export default ButtonWhite;
