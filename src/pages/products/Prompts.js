import React from 'react';
import { Link } from 'react-router-dom';
import ButtonOrange from '../../components/buttons/ButtonOrange';

const Prompts = ({ data }) => {
  return (
    <div className="grid grid-cols-1 place-items-start gap-14">
      {data &&
        data.map(({ product_images: images, title: product, slug, category }) => (
          <article key={slug} className="flex flex-col justify-center items-center gap-8">
            <figure>
              <img src={images.mobile} alt={slug} />
            </figure>
            <h2 className="text-center text-[1.75rem] leading-normal tracking-[1px]">
              {product}
            </h2>

            <Link to={`/products/${slug}`} state={{ slug, category }}>
              <ButtonOrange />
            </Link>
          </article>
        ))}
    </div>
  );
};

export default Prompts;
