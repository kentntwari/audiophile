import React, { Fragment, useCallback, useEffect, createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

import { displayCart } from '../../global/features/cart/showCartSlice';

const Navigation = () => {
  const isCartDisplayed = useSelector((state) => state.displayCart);
  const dispatch = useDispatch();

  const location = useLocation();

  const mobile_menu_ref = createRef();

  useEffect(() => {
    if (document.body.classList.contains('overflow-y-hidden'))
      return document.body.classList.remove('overflow-y-hidden');
  }, [location.pathname]);

  const displayMenu = useCallback(() => {
    if (mobile_menu_ref) {
      mobile_menu_ref.current.classList.toggle('hidden');

      return document.body.classList.toggle('overflow-y-hidden');
    }

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
