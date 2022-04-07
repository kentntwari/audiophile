import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonWhite from '../../components/buttons/ButtonWhite';

const UpgradeCTA = () => {
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    let isFetched = true;

    import('../../utilities/images/mobile/image-speaker-zx9.png').then(
      (module) =>
        isFetched &&
        setProductImage(() => (
          <img
            className="w-[172.25px] xl:w-[224px] 2xl:w-[410px]"
            src={module.default}
            alt="upgrade_speaker"
          />
        ))
    );

    return () => (isFetched = false);
  }, [productImage]);

  return (
    <article
      className="relative bg-orange-full px-8 py-[55px] rounded-md grid grid-cols-1
     xl:grid-cols-2 2xl:w-[1110px] 2xl:mx-auto justify-center items-center gap-8">
      <figure className="flex justify-center 2xl:object-scale-down">
        {productImage}
      </figure>

      <div className="flex flex-col md:items-center xl:items-start gap-4 2xl:gap-8">
        <h2 className="text-white-full text-center xl:text-left lg:w-[16.3rem] justify-self-center">
          zx9 speaker
        </h2>
        <p className="text-white-full text-center xl:text-left md:w-[360px]
         xl:w-fit 2xl:w-[21.8rem] justify-self-center opacity-75">
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
      </div>
    </article>
  );
};

export default UpgradeCTA;
