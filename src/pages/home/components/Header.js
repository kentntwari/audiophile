import React from 'react';
import featuredImageMobile from '../../../utilities/images/mobile/image-header.jpg';
import ButtonOrange from '../../../components/buttons/ButtonOrange';

const Header = () => {
  return (
    <header className="relative p-app flex h-[510px]">
      <div className="absolute -top-[90px] left-0">
        <img src={featuredImageMobile} alt="featured-mobile" />
      </div>

      <div className="relative z-10 margin-auto flex flex-col items-center justify-center gap-6">
        <p className="uppercase text-white-full text-[14px] tracking-[10px]">
          New Product
        </p>

        <h1 className="text-center text-white-full text-[36px] leading-[40px] tracking-[1.29px]">
          XX99 MARK II HEADPHONES
        </h1>

        <p className="text-white-full text-center">
          Experience natural, lifelike audio and exceptional build quality made for the
          passionate music enthusiast.
        </p>

        <ButtonOrange />
      </div>
    </header>
  );
};

export default Header;
