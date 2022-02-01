import React from 'react';
import { useDispatch } from 'react-redux';
import { displayCart } from '../../global/features/cart/showCartSlice';
import logo from '../../utilities/images/mobile/logo.svg';
import cart from '../../utilities/images/mobile/icon-cart.svg';

const Menu = () => {
  const dispatch = useDispatch();

  return (
    <header>
      <nav className="relative z-10 bg-[#191919] w-full px-app py-9 flex justify-between items-center">
        <i className="fas fa-bars text-white-full"></i>
        <img src={logo} alt="logo-audiophile-mobile" />
        <img
          src={cart}
          alt="cart"
          onClick={() => {
            dispatch(displayCart());
            document.body.classList.toggle('overflow-hidden');
          }}
        />
      </nav>
    </header>
  );
};

export default Menu;
