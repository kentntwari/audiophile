import React, { useRef } from 'react';

import useManipulateClasses from '../../utilities/hooks/useManipulateClasses';

const ButtonOrange = ({ addClass, removeClass }) => {
  const button_orange = useRef();

  useManipulateClasses(button_orange, addClass, removeClass);

  return (
    <button
      ref={button_orange}
      className="bg-orange-full hover:bg-orange-dimmed w-40 h-12 flex justify-center items-center font-bold text-xsm
      text-white-full uppercase tracking-style-button">
      see product
    </button>
  );
};

export default ButtonOrange;
