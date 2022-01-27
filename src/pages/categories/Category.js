import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import useCategoryProducts from '../../utilities/hooks/useCategoryProducts';
import ButtonOrange from '../../components/buttons/ButtonOrange';

const Category = () => {
  const { category } = useParams();

  const [...products] = useCategoryProducts(category);

  return (
    <Fragment>
      {products.length > 0 &&
        products.map(
          (
            { description, slug, image_mobile, _image_tablet, image_desktop, title },
            index
          ) => (
            <article key={index} className="flex flex-col items-center gap-8">
              <section>
                <img src={image_mobile} alt={title} />
              </section>

              <section className="flex flex-col justify-center items-center gap-8">
                {index === 0 && <div className="type-overline">new product</div>}
                <h2 className="text-center text-[1.75rem] leading-normal tracking-[1px]">
                  {title}
                </h2>
                <p className="text-center opacity-50">{description}</p>

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
