import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonWhite from '../../components/buttons/ButtonWhite';

const BuyProductTwo = () => {
  const [productImageMobile, setProductImageMobile] = useState(null);
  const [productImageTablet, setProductImageTablet] = useState(null);
  const [productImageDesktop, setProductImageDesktop] = useState(null);

  useEffect(() => {
    import('../../utilities/images/mobile/image-earphones-yx1.jpg').then((module) =>
      setProductImageMobile(module.default)
    );

    import('../../utilities/images/tablet/image-earphones-yx1.jpg').then((module) =>
      setProductImageTablet(module.default)
    );

    import('../../utilities/images/desktop/image-earphones-yx1.jpg').then((module) =>
      setProductImageDesktop(module.default)
    );
  }, []);

  return (
    <article className="2xl:w-[1110px] 2xl:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[11px]">
      <figure>
        <img
          className="rounded-md lg:hidden"
          src={productImageMobile}
          alt="yx1-earphones-mobile"
        />

        <img
          className="hidden lg:block 2xl:hidden rounded-md"
          src={productImageTablet}
          alt="yx1-earphones-tablet"
        />

        <img
          className="hidden 2xl:block rounded-md"
          src={productImageDesktop}
          alt="yx1-earphones-desktop"
        />
      </figure>

      <section className="px-6 py-[2.563rem] rounded-md bg-white-dimmed flex flex-col lg:justify-center gap-8">
        <h2 className="text-[1.75rem] leading-normal tracking-[2px]">yx1 earphones</h2>

        <Link
          to={`products/yx1-earphones`}
          state={{ slug: 'yx1-wireless-earphones', category: 'earphones' }}>
          <ButtonWhite addClass={['bg-transparent']} removeClass={['bg-white-full']} />
        </Link>
      </section>
    </article>
  );
};

export default BuyProductTwo;
