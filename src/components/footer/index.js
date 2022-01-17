import React from 'react';
import logo from '../../utilities/images/mobile/logo.svg';
import Links from '../menu/Links';
import FooterText from './FooterText';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className="mt-30 px-app bg-black-plus flex flex-col justify-center items-start">
      <div className="w-full md:hidden flex flex-col gap-12">
        <div className="w-[101px] h-1 bg-orange-full m-auto"></div>
        <figure className="flex justify-center">
          <img src={logo} alt="logo" />
        </figure>

        <Links />
        <FooterText
          text={`Audiophile is an all in one stop to fulfill your audio needs.
          We're a small team of music lovers and sound specialists who are devoted to helping you
          get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.`}
        />
        <FooterText
          customClassValue="font-bold"
          text="Copyright 2020.All Rights Reserved"
        />
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
