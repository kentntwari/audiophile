import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addedToCart } from '../../global/features/cart/cartSlice';
import useProductData from '../../utilities/hooks/useProductData';

const ProductInfo = lazy(() => import('./ProductInfo'));
const Gallery = lazy(() => import('./Gallery'));
const Prompts = lazy(() => import('./Prompts'));
const BoxItems = lazy(() => import('./BoxItems'));
const Features = lazy(() => import('./Features'));

const Product = () => {
  let location = useLocation();
  const [basicData, newProduct, boxItems, productGallery, prompts] = useProductData(
    location.state.slug,
    location.state.category
  );

  const dispatch = useDispatch();

  return (
    <Suspense
      fallback={
        <div className="w-full h-3/6 flex justify-center items-center">Loading...</div>
      }>
      <article className="2xl:w-[1110px] 2xl:mx-auto flex flex-col justify-start items-start gap-22">
        <article className="grid grid-col lg:grid-cols-2 place-items-start lg:items-center gap-6 2xl:gap-[125px]">
          {basicData &&
            basicData.map(({ image_mobile, slug }) => (
              <figure key={slug} className="2xl:w-[540px]">
                <img className="rounded-md" src={image_mobile} alt={slug} />
              </figure>
            ))}

          <div className="2xl:w-[445px] flex flex-col gap-4">
            {newProduct && <div className="type-overline">new product</div>}

            {basicData && (
              <ProductInfo
                info={basicData}
                dispatchToStore={dispatch}
                storeActions={{
                  data: (image, itemName, itemPrice, quantity) =>
                    addedToCart(image, itemName, itemPrice, quantity),
                }}
              />
            )}
          </div>
        </article>

        <section className="grid grid-cols-1 2xl:grid-cols-2 place-items-start gap-22 2xl:gap-[125px]">
          {basicData && <Features data={basicData} />}

          <BoxItems data={boxItems} />
        </section>

        <Gallery pictures={productGallery} />

        <section className="flex flex-col gap-10 ">
          <h2 className="text-center text-[1.75rem] leading-normal tracking-[1px]">
            You may also like
          </h2>
          <Prompts data={prompts} />
        </section>
      </article>
    </Suspense>
  );
};

export default Product;
