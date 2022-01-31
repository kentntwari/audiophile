import React, { forwardRef } from 'react';

const AddToCart = forwardRef(({ children = 'add to cart', addToCart }, buttonRef) => {
  return (
    <button
      className="bg-orange-full hover:bg-orange-dimmed w-40
         h-12 flex justify-center items-center font-bold text-xsm 
         text-white-full uppercase tracking-style-button"
      onClick={addToCart}
      ref={buttonRef}>
      {children}
    </button>
  );
});

export default AddToCart;
