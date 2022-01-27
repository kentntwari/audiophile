import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { itemAdded } from '../../global/features/cart/addItemSlice';
import { increment, decrement } from '../../global/features/cart/quantitySlice';
import useProductData from '../../utilities/hooks/useProductData';
import ProductInfo from './ProductInfo';
import Gallery from './Gallery';
import Prompts from './Prompts';
import BoxItems from './BoxItems';
import Features from './Features';

const Product = () => {
  let location = useLocation();

  const [basicData, newProduct, boxItems, productGallery, prompts] = useProductData(
    location.state.slug,
    location.state.category
  );

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

        {basicData && (
          <ProductInfo
            info={basicData}
            dispatchToStore={dispatch}
            storeActions={{
              data:(image,itemName,itemPrice,quantity)=> itemAdded(image,itemName,itemPrice,quantity),
              increaseQuantity: increment(),
              decreaseQuantity: decrement(),
            }}
            quantity={quantity}
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
  );
};

export default Product;
