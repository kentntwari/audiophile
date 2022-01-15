import React from 'react';

const ShopButton = () => {
  return (
    <button className="flex items-center gap-[13px]">
      <span className="font-bold text-xsm uppercase tracking-style-button text-black-full hover:text-orange-full">
        shop
      </span>
      <i className="fas fa-chevron-right text-orange-full fa-xs"></i>
    </button>
  );
};

export default ShopButton;
