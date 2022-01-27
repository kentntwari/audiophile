import React, { Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { itemAdded } from '../../global/features/cart/addItemSlice';
import { increment, decrement } from '../../global/features/cart/quantitySlice';
import useProductData from '../../utilities/hooks/useProductData';
import ButtonOrange from '../../components/buttons/ButtonOrange';

const Product = () => {
  let location = useLocation();

  const [basicData, newProduct, boxItems, productGallery, prompts] = useProductData(
    location.state.slug,
    location.state.category
  );

  const quantityRef = useRef();

  const quantity = useSelector((state) => state.quantity.value);

  const dispatch = useDispatch();

  return (
    <article className="flex flex-col justify-start items-start gap-22">
      <article className="grid grid-col place-items-start gap-6">
        {basicData &&
          basicData.map(({ image_mobile, slug }) => (
            <figure key={slug}>
              <img className="rounded-md" src={image_mobile} alt={slug} />
            </figure>
          ))}

        {newProduct === true && <div className="type-overline">new product</div>}

        {basicData &&
          basicData.map(({ image_mobile, title, description, price }, index) => (
            <Fragment key={index}>
              <section>
                <h2 className="text-[1.75rem] leading-normal tracking-[1px]">{title}</h2>
                <p className="opacity-50">{description}</p>
              </section>

              <h6>$ {price}</h6>

              <section className="flex justify-start items-start gap-4">
                <div className="bg-white-dimmed w-30 h-12 flex justify-center items-center gap-[31px]">
                  <span
                    className="font-bold opacity-50"
                    onClick={() => {
                      if (quantityRef.current.innerText === '1') return 1;

                      return dispatch(decrement());
                    }}>
                    -
                  </span>
                  <span ref={quantityRef} className="font-bold">
                    {quantity}
                  </span>
                  <span
                    className="font-bold opacity-50"
                    onClick={() => dispatch(increment())}>
                    +
                  </span>
                </div>
                <ButtonOrange
                  addToCart={() =>
                    dispatch(itemAdded(image_mobile, title, price, quantity))
                  }>
                  Add to cart
                </ButtonOrange>
              </section>
            </Fragment>
          ))}
      </article>

      <section className="grid grid-cols-1 place-items-start gap-22">
        {basicData &&
          basicData.map(({ feature_one, feature_two }) => (
            <div key={location.state.slug} className="flex flex-col gap-6">
              <h2 className="text-[1.75rem] leading-normal tracking-[1px]">Features</h2>
              <p className="opacity-50">{feature_one}</p>
              <p className="opacity-50">{feature_two}</p>
            </div>
          ))}

        <div className="flex flex-col justify-start items-start gap-6">
          <h2 className="text-[1.75rem] leading-normal tracking-[1px]">in the box</h2>
          <div className="flex flex-col gap-[8px]">
            {boxItems === null ? (
              <p>Loading...</p>
            ) : (
              boxItems.map(({ item, quantity }, index) => (
                <div key={index} className="flex justify-start items-center gap-5">
                  <p className="uppercase font-bold text-orange-full">{quantity}x</p>
                  <p className="opacity-50">{item}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section>
        {productGallery && (
          <Fragment>
            <div className="flex flex-col justify-start items-start gap-5">
              {productGallery.mobile.map((img, index) => (
                <img
                  key={index}
                  className="rounded-md"
                  src={img}
                  alt={`product-in-action-${index + 1}`}
                />
              ))}
            </div>
          </Fragment>
        )}
      </section>

      <section className="flex flex-col gap-10 ">
        <h2 className="text-center text-[1.75rem] leading-normal tracking-[1px]">
          You may also like
        </h2>

        <div className="grid grid-cols-1 place-items-start gap-14">
          {prompts &&
            prompts.map(({ product_images: images, title: product, slug, category }) => (
              <article
                key={slug}
                className="flex flex-col justify-center items-center gap-8">
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
      </section>
    </article>
  );
};

export default Product;
