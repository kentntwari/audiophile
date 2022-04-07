import React from 'react';
import { Link } from 'react-router-dom';
import ButtonOrange from '../../components/buttons/ButtonOrange';

const Prompts = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 place-items-start gap-14 lg:gap-[11px]">
      {data &&
        data.map(({ product_images: images, title: product, slug, category }) => (
          <article key={slug} className="flex flex-col justify-center items-center gap-8">
            <figure>
              <img src={images.mobile} className="2xl:hidden" alt={`${slug}-mobile`} />
              <img
                src={images.desktop}
                className="hidden 2xl:block 2xl:w-[350px] object-scale-down"
                alt={`${slug}-desktop`}
              />
            </figure>
            <h5 className="text-center sm:text-[1.75rem] leading-normal tracking-[1px]">
              {product}
            </h5>

            <Link to={`/products/${slug}`} state={{ slug, category }}>
              <ButtonOrange />
            </Link>
          </article>
        ))}
    </div>
  );
};

export default Prompts;
