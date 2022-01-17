import React from 'react';

const ShopButton = ({ customClassValue }) => {
  return (
    <button
      className={`${
        customClassValue ? customClassValue : ''
      }flex items-center gap-[13px]`}>
      <span className="font-bold text-xsm uppercase tracking-style-button text-black-full hover:text-orange-full opacity-50">
        shop
      </span>
      <i className="fas fa-chevron-right text-orange-full fa-xs"></i>
    </button>
  );
};

export default ShopButton;
