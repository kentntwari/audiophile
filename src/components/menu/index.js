import React, { createRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { displayCart } from '../../global/features/cart/showCartSlice';
import logo from '../../utilities/images/mobile/logo.svg';
import cart from '../../utilities/images/mobile/icon-cart.svg';
import MobileMenu from './MobileMenu';

const Menu = () => {
  const isCartDisplayed = useSelector((state) => state.displayCart);
  const dispatch = useDispatch();

  const mobile_menu_ref = createRef();

  const triggerEvents = useCallback(() => {
    mobile_menu_ref.current.classList.toggle('hidden');
  }, [mobile_menu_ref]);

  return (
    <header>
      <nav className="relative z-40 bg-[#191919] w-full px-app py-9 flex justify-between items-center">
        <i
          className="fas fa-bars text-white-full"
          onClick={() => {
            if (isCartDisplayed === true) return dispatch(displayCart());

            triggerEvents();
          }}></i>
        <img src={logo} alt="logo-audiophile-mobile" />
        <img src={cart} alt="cart" onClick={() => dispatch(displayCart())} />
        <MobileMenu ref={mobile_menu_ref} />
      </nav>
    </header>
  );
};

export default Menu;
