import React from 'react';
import zx9_speaker from '../../../utilities/images/mobile/image-speaker-zx9.png';

const UpgradeCTA = () => {
  return (
    <article className="bg-orange-full flex flex-col justify-center items-center gap-8">
      <div>
        <img src={zx9_speaker} alt="upgrade_speaker" />
      </div>

      <h2 className='text-white-full'>zx9 speaker</h2>
      <p className='text-white-full text-center'>
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>

      <button className='bg-black-full font-bold text-xsm uppercase tracking-[1px]'>see product</button>
    </article>
  );
};

export default UpgradeCTA;
