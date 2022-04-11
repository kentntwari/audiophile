import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, useParams } from 'react-router-dom';

import useCategoryProducts from '../../utilities/hooks/useCategoryProducts';

import ButtonOrange from '../../components/buttons/ButtonOrange';

const Category = () => {
  const { category } = useParams();

  const products = useCategoryProducts(category);

  return (
    <Fragment>
      {products.length > 0 &&
        products.map(
          (
            { description, slug, image_mobile, image_tablet, image_desktop, title },
            index
          ) => (
            <article
              key={uuidv4()}
              className="2xl:w-fit 2xl:mx-auto flex flex-col xl:flex-row
               items-center gap-8 2xl:gap-[125px]">
              <section className={index % 2 !== 0 ? 'xl:order-last' : 'xl:order-first'}>
                <img src={image_mobile} alt={title} className="lg:hidden" />

                <img
                  src={image_tablet}
                  alt={title}
                  className="hidden lg:block xl:hidden"
                />
                <img
                  src={image_desktop}
                  alt={title}
                  className="hidden xl:block 2xl:w-[540px]"
                />
              </section>

              <section
                className={`2xl:w-[445px] flex flex-col justify-center items-center
                 xl:items-start gap-8 lg:gap-6 xl:gap-4 ${
                   index % 2 !== 0 ? 'xl:order-first' : 'xl:order-last'
                 }`}>
                {index === 0 && <div className="type-overline">new product</div>}
                <h2
                  className="w-[275px] xl:w-full text-center xl:text-left text-[1.75rem]
                 leading-normal tracking-[1px]">
                  {title}
                </h2>
                <p className="lg:w-[545px] xl:w-full text-center xl:text-left opacity-50">
                  {description}
                </p>

                <Link
                  to={`/products/${slug}`}
                  state={{ slug, category }}
                  onClick={() => window.scrollTo(0, 0)}>
                  <ButtonOrange />
                </Link>
              </section>
            </article>
          )
        )}
    </Fragment>
  );
};

export default Category;
