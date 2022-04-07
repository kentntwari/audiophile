import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonWhite from '../../components/buttons/ButtonWhite';

const BuyProductOne = () => {
  const [productImageMobile, setProductImageMobile] = useState(null);
  const [productImageTablet, setProductImageTablet] = useState(null);
  const [productImageDesktop, setProductImageDesktop] = useState(null);

  useEffect(() => {
    import('../../utilities/images/mobile/image-speaker-zx7.jpg').then((module) =>
      setProductImageMobile(module.default)
    );

    import('../../utilities/images/tablet/image-speaker-zx7.jpg').then((module) =>
      setProductImageTablet(module.default)
    );

    import('../../utilities/images/desktop/image-speaker-zx7.jpg').then((module) =>
      setProductImageDesktop(module.default)
    );
  }, []);

  return (
    <article className="2xl:w-[1110px] 2xl:mx-auto grid grid-cols-1 grid-rows-1">
      <figure className="md:justify-self-end col-start-1 row-start-1 row-span-1">
        <img
          className="rounded-md md:hidden"
          src={productImageMobile}
          alt="zx7-speaker"
        />

        <img
          className="hidden md:block xl:hidden rounded-md"
          src={productImageTablet}
          alt="zx7-speaker"
        />

        <img
          className="hidden xl:block rounded-md"
          src={productImageDesktop}
          alt="zx7-speaker"
        />
      </figure>

      <section className="pl-6 col-start-1 row-start-1 row-span-1">
        <div className="h-full flex flex-col justify-center gap-8">
          <h2 className="text-[1.75rem] leading-normal tracking-[2px]">zx7 speaker</h2>
          <Link
            to={`products/zx7-speaker`}
            state={{ slug: 'zx7-speaker', category: 'speaker' }}>
            <ButtonWhite addClass={['bg-transparent']} removeClass={['bg-white-full']} />
          </Link>
        </div>
      </section>
    </article>
  );
};

export default BuyProductOne;
