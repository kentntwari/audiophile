import React from 'react';
import { useDispatch } from 'react-redux';

import Navigation from './Navigation';

import { displayCart } from '../../global/features/cart/showCartSlice';
import cart from '../../utilities/images/mobile/icon-cart.svg';

const Menu = () => {
  const dispatch = useDispatch();

  return (
    <header className="w-full bg-[#191919]">
      <nav
        className="relative z-40 w-full 2xl:w-[1110px] 2xl:mx-auto
       px-app xl:px-[10.313rem] 2xl:px-0 py-9 flex justify-between items-center">
        <Navigation />

        <div className="w-1/4 xl:w-[10%] flex justify-end cursor-pointer">
          <img src={cart} alt="cart" onClick={() => dispatch(displayCart())} />
        </div>
      </nav>
    </header>
  );
};

export default Menu;
