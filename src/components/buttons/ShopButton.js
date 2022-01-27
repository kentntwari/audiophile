import React, { useRef } from 'react';
import useManipulateClasses from '../../utilities/hooks/useManipulateClasses';

const ShopButton = ({ children = 'shop', addClass, removeClass }) => {
  const shop_button = useRef();

  useManipulateClasses(shop_button, addClass, removeClass);

  return (
    <button ref={shop_button} className="flex items-center gap-[13px]">
      <span className="font-bold text-xsm uppercase tracking-style-button text-black-full hover:text-orange-full opacity-50">
        {children}
      </span>
      <i className="fas fa-chevron-right text-orange-full fa-xs"></i>
    </button>
  );
};

export default ShopButton;
