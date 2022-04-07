import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import useCategories from '../../utilities/hooks/useCategories';

import logo from '../../utilities/images/desktop/logo.svg';

const DesktopNav = () => {
  const categories = useCategories();

  return (
    <section className="hidden xl:w-[90%] 2xl:w-3/4 xl:flex xl:items-center xl:justify-between">
      <Link to="/">
        <img src={logo} alt="logo-audiophile-desktop" />
      </Link>

      <div className="flex items-center gap-[34px]">
        <Link to="/" className="text-xsm tracking-[2px] text-white-full uppercase">
          Home
        </Link>

        {categories &&
          categories.map(({ category, slug }) => (
            <Link
              key={uuidv4()}
              to={`/categories/${slug}`}
              className="text-xsm tracking-[2px] text-white-full uppercase">
              {category}
            </Link>
          ))}
      </div>
    </section>
  );
};

export default DesktopNav;
