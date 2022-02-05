import React from 'react';

const CartItem = ({ item, image, price, quantity }) => {
  return (
    <article className="w-full flex justify-between items-center">
      <div className="w-[155px] flex justify-start items-center gap-4">
        <img src={image} alt={item} className="w-[64px] h-[64px] rounded-md" />

        <div>
          <p className="font-bold uppercase">{item.split(' ').slice(0, 1)}</p>
          <p className="font-bold opacity-50">${price}</p>
        </div>
      </div>

      <p className="font-bold opacity-50">x{quantity}</p>
    </article>
  );
};

export default CartItem;
