import React from 'react';

const ButtonOrange = ({ customClassValue }) => {
  return (
    <button
      className={`${
        customClassValue ? customClassValue : ''
      }bg-orange-full hover:bg-orange-dimmed w-40 h-12 flex justify-center items-center font-bold text-xsm
      text-white-full uppercase tracking-style-button`}>
      see product
    </button>
  );
};

export default ButtonOrange;
