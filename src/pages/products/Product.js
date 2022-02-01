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
      <article className="flex flex-col justify-start items-start gap-22">
        <article className="grid grid-col place-items-start gap-6">
          {basicData &&
            basicData.map(({ image_mobile, slug }) => (
              <figure key={slug}>
                <img className="rounded-md" src={image_mobile} alt={slug} />
              </figure>
            ))}

          {newProduct === true && <div className="type-overline">new product</div>}

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
        </article>

        <section className="grid grid-cols-1 place-items-start gap-22">
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
