import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import useCategories from '../../utilities/hooks/useCategories';
import useScrollToTop from '../../utilities/hooks/useScrollToTop';

import FooterMobile from './FooterMobile';
import Socials from './Socials';

import logo from '../../utilities/images/desktop/logo.svg';

const Footer = () => {
  const categories = useCategories();
  const scrollToTop = useScrollToTop();

  return (
    <footer
      className="mt-30 px-app xl:px-[10.313rem] lg:pb-[38px] bg-black-plus
     flex flex-col justify-center items-start">
      <FooterMobile />

      <div className="hidden 2xl:flex 2xl:w-[1110px] 2xl:mx-auto">
        <section>
          <div className="w-[101px] h-1 bg-orange-full m-auto lg:m-0"></div>

          <div className="w-[56%] mt-[71px] flex flex-col justify-between gap-[36px]">
            <Link to="/" className="flex justify-start">
              <img src={logo} alt="logo" />
            </Link>

            <p className="text-center lg:text-left text-white-full opacity-50">
              Audiophile is an all in one stop to fulfill your audio needs. We're a small
              team of music lovers and sound specialists who are devoted to helping you
              get the most out of personal audio. Come and visit our demo facility - we're
              open 7 days a week.
            </p>

            <p className="text-center lg:text-left text-white-full opacity-50">
              Copyright 2020.All Rights Reserved
            </p>
          </div>
        </section>

        <div className="w-2/5 mt-[71px] flex flex-col justify-between items-end">
          <div className="flex items-center gap-[34px]">
            <Link
              to="/"
              className="text-xsm text-white-full uppercase cursor-pointer"
              onClick={scrollToTop}>
              Home
            </Link>

            {categories &&
              categories.map(({ category, slug }) => (
                <Link
                  key={uuidv4()}
                  to={`/categories/${slug}`}
                  className="text-xsm tracking-[2px] text-white-full uppercase"
                  onClick={scrollToTop}>
                  {category}
                </Link>
              ))}
          </div>

          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
