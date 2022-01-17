import React from 'react';
import BestGearMobile from '../utilities/images/mobile/image-best-gear.jpg';

const Sneakpeak = () => {
  return (
    <div className="mt-30 px-app flex flex-col justify-center gap-8">
      <figure>
        <img className="rounded-md" src={BestGearMobile} alt="best-gear-mobile" />
      </figure>

      <h2 className="text-center text-[1.75rem] tracking-[1px] leading-normal">
        Bringing you the <span className="text-orange-full">best</span> audio gear
      </h2>

      <p className="text-center opacity-50">
        Located at the heart of New York City, Audiophile is the premier store for high
        end headphones, earphones, speakers, and audio accessories. We have a large
        showroom and luxury demonstration rooms available for you to browse and experience
        a wide range of our products. Stop by our store to meet some of the fantastic
        people who make Audiophile the best place to buy your portable audio equipment.
      </p>
    </div>
  );
};

export default Sneakpeak;
