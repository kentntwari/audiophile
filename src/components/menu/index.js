import React from 'react';
import Hamburger from './Hamburger';
import Logo from './Logo';
import Cart from './Cart';

const Menu = () => {
  return (
    <header>
      <nav className="relative z-10 bg-[#191919] w-full px-app py-9 flex justify-between items-center">
        <Hamburger />
        <Logo />
        <Cart />
      </nav>
    </header>
  );
};

export default Menu;
