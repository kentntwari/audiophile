import React, { forwardRef, memo } from 'react';
import { Link } from 'react-router-dom';

import ToggledMenu from './ToggledMenu';

import logo from '../../utilities/images/mobile/logo.svg';

const MobileNav = forwardRef(({ menu }, ref) => {
  return (
    <section className="w-2/3 md:w-3/5 flex justify-between items-center xl:hidden">
      <div className="xl:hidden">
        <i className="fas fa-bars text-white-full" onClick={menu}></i>
      </div>

      <Link to="/">
        <img src={logo} alt="logo-audiophile-mobile" />
      </Link>

      <ToggledMenu ref={ref} />
    </section>
  );
});

export default memo(MobileNav);
