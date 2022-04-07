import React from 'react';

import Links from '../menu/Links';
import Socials from './Socials';

import logo from '../../utilities/images/mobile/logo.svg';

const FooterMobile = () => {
  return (
    <div className="2xl:hidden w-full flex flex-col lg:items-start gap-12">
      <div className="w-[101px] h-1 bg-orange-full m-auto lg:m-0"></div>
      <figure className="flex justify-center">
        <img src={logo} alt="logo" />
      </figure>

      <Links />

      <p className="text-center lg:text-left text-white-full opacity-50">
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team
        of music lovers and sound specialists who are devoted to helping you get the most
        out of personal audio. Come and visit our demo facility - we're open 7 days a
        week.
      </p>

      <div className="w-full flex flex-col lg:flex-row justify-center
       lg:justify-between items-center gap-12">
        <p className="text-center lg:text-left text-white-full opacity-50">
          Copyright 2020.All Rights Reserved
        </p>

        <Socials />
      </div>
    </div>
  );
};

export default FooterMobile;
