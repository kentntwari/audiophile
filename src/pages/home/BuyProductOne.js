import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonWhite from '../../components/buttons/ButtonWhite';

const BuyProductOne = () => {
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    import('../../utilities/images/mobile/image-speaker-zx7.jpg').then((module) =>
      setProductImage(module.default)
    );
  }, []);

  return (
    <article className="grid grid-cols-1 grid-rows-1">
      <figure className="col-start-1 row-start-1 row-span-1">
        <img className="rounded-md" src={productImage} alt="zx7-speaker" />
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
