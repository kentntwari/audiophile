import React from 'react';
import logo from '../../utilities/images/mobile/logo.svg';
import cart from '../../utilities/images/mobile/icon-cart.svg';

const Menu = () => {
  return (
    <header>
      <nav className="relative z-10 bg-[#191919] w-full px-app py-9 flex justify-between items-center">
        <i className="fas fa-bars text-white-full"></i>
        <img src={logo} alt="logo-audiophile-mobile" />
        <img src={cart} alt="cart" />
      </nav>
    </header>
  );
};

export default Menu;
