import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import ShopButton from '../buttons/ShopButton';

const ListCategory = memo(({ name: category, thumbnail, slug }) => {
  return (
    <Link to={`/categories/${category}`} onClick={() => window.scrollTo(0, 0)}>
      <article
        className="relative pt-[5.5rem] pb-4 rounded-md
       bg-white-dimmed flex flex-col 2xl:justify-center items-center gap-[17px]">
        <figure>
          <img
            className="w-[150px] lg:w-[50%] 2xl:w-1/2 absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={thumbnail}
            alt={slug}
          />
          <figcaption className="font-bold uppercase text-[0.938rem] tracking-[1.07px]">
            {category}
          </figcaption>
        </figure>
        <ShopButton />
      </article>
    </Link>
  );
});

export default ListCategory;
