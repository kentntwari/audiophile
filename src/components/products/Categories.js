import React from 'react';
import { Link } from 'react-router-dom';
import useCategories from '../../utilities/hooks/useCategories';
import categories from '../../api/endpoints/categories';
import ShopButton from '../buttons/ShopButton';

const Categories = () => {
  const [...results] = useCategories(categories);

  return (
    <section className="grid grid-cols-1 gap-17">
      {results.map(({ category, category_image, slug }, index) => {
        return (
          <Link
            key={index}
            to={`/categories/${category}`}
            onClick={() => window.scrollTo(0, 0)}>
            <article className="relative pt-[5.5rem] pb-4 rounded-md bg-white-dimmed flex flex-col items-center gap-[17px]">
              <figure>
                <img
                  className="w-1/2 absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  src={category_image}
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
      })}
    </section>
  );
};

export default Categories;
