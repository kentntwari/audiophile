import React, { Fragment, useCallback, createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

import { displayCart } from '../../global/features/cart/showCartSlice';

const Navigation = () => {
  const isCartDisplayed = useSelector((state) => state.displayCart);
  const dispatch = useDispatch();

  const mobile_menu_ref = createRef();

  const displayMenu = useCallback(() => {
    if (mobile_menu_ref) return mobile_menu_ref.current.classList.toggle('hidden');

    if (isCartDisplayed) return dispatch(displayCart());
  }, [mobile_menu_ref, isCartDisplayed, dispatch]);

  return (
    <Fragment>
      <MobileNav ref={mobile_menu_ref} menu={displayMenu} />

      <DesktopNav />
    </Fragment>
  );
};

export default Navigation;
