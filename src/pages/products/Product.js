import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import useProductData from '../../utilities/hooks/useProductData';
import ButtonOrange from '../../components/buttons/ButtonOrange';

const Product = () => {
  let location = useLocation();

  const [initialData, newProduct] = useProductData(
    location.state.slug,
    location.state.category
  );

  return (
    <article className="flex flex-col justify-start items-start gap-22">
      <article className="grid grid-col place-items-start gap-6">
        {initialData && (
          <figure>
            <img
              className="rounded-md"
              src={initialData.image_mobile}
              alt={initialData.slug}
            />
          </figure>
        )}

        {newProduct === true && <div className="type-overline">new product</div>}

        {initialData && (
          <Fragment>
            <section>
              <h2 className="text-[1.75rem] leading-normal tracking-[1px]">
                {initialData.title}
              </h2>
              <p className="opacity-50">{initialData.description}</p>
            </section>

            <h6>$ {initialData.price}</h6>

            <section className="flex justify-start items-start gap-4">
              <div className="bg-white-dimmed w-30 h-12 flex justify-center items-center gap-[31px]">
                <span className="font-bold opacity-50">-</span>
                <span className="font-bold">1</span>
                <span className="font-bold opacity-50">+</span>
              </div>
              <ButtonOrange>Add to cart</ButtonOrange>
            </section>
          </Fragment>
        )}
      </article>

      <section className="grid grid-cols-1 place-items-start gap-22">
        {initialData && (
          <div className="flex flex-col gap-6">
            <h2 className="text-[1.75rem] leading-normal tracking-[1px]">Features</h2>
            <p className="opacity-50">{initialData.feature_one}</p>
            <p className="opacity-50">{initialData.feature_two}</p>
          </div>
        )}

        <div className="flex flex-col justify-start items-start gap-6">
          <h2 className="text-[1.75rem] leading-normal tracking-[1px]">in the box</h2>
        </div>
      </section>
    </article>
  );
};

export default Product;
