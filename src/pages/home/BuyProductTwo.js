import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonWhite from '../../components/buttons/ButtonWhite';

const BuyProductTwo = () => {
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    import('../../utilities/images/mobile/image-earphones-yx1.jpg').then((module) =>
      setProductImage(module.default)
    );
  }, []);

  return (
    <article className="grid grid-cols-1 gap-6">
      <figure>
        <img className="rounded-md" src={productImage} alt="yx1-earphones" />
      </figure>

      <section className="px-6 py-[2.563rem] rounded-md bg-white-dimmed flex flex-col gap-8">
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
