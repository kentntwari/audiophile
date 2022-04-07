import React, { useEffect, forwardRef } from 'react';
import { useLocation } from 'react-router-dom';

import Categories from '../products/Categories';

const ToggledMenu = forwardRef((props, ref) => {
  let location = useLocation();

  useEffect(() => {
    if (!ref.current.classList.contains('hidden'))
      return ref.current.classList.add('hidden');
  }, [ref, location.pathname]);

  return (
    <section ref={ref} className="hidden absolute w-full left-0 top-0">
      <div className="absolute top-[97px] opacity-50 w-full h-screen bg-black-full"></div>

      <div
        className="absolute px-app pt-[84px] lg:pt-0 pb-app
         top-[97px] left-0 w-full bg-white-full">
        <Categories applyClass="lg:mt-[6rem]" />
      </div>
    </section>
  );
});

export default ToggledMenu;
