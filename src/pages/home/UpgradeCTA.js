import React from 'react';
import { Link } from 'react-router-dom';
import ButtonWhite from '../../components/buttons/ButtonWhite';
import zx9_speaker from '../../utilities/images/mobile/image-speaker-zx9.png';

const UpgradeCTA = () => {
  return (
    <article className="bg-orange-full px-8 py-[55px] rounded-md grid grid-cols-1 justify-center items-center gap-8">
      <figure className="flex justify-center">
        <img className="w-[172.25px]" src={zx9_speaker} alt="upgrade_speaker" />
      </figure>

      <h2 className="text-white-full text-center">zx9 speaker</h2>
      <p className="text-white-full text-center">
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <Link
        className="flex justify-center"
        to={`products/zx9-speaker`}
        state={{ slug: 'zx9-speaker', category: 'speaker' }}>
        <ButtonWhite
          removeClass={['bg-white-full', 'text-black-full']}
          addClass={['bg-black-full', 'text-white-full', 'justify-self-center']}
        />
      </Link>
    </article>
  );
};

export default UpgradeCTA;
