import React, { Fragment, useRef, useEffect, createRef } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import AddToCart from '../../components/buttons/AddToCart';
import Cart from '../../components/products/Cart';

const ProductInfo = ({ info, dispatchToStore, storeActions }) => {
  const quantityRef = useRef();
  const buttonRef = createRef();

  const { data } = storeActions;

  const location = useLocation();

  useEffect(() => {
    quantityRef.current.innerText = '1';
    buttonRef.current.innerText = 'add to cart';
  }, [location.state.slug, buttonRef]);

  return (
    <Fragment>
      {info.map(({ image_mobile, title, description, price }) => (
        <div key={uuidv4()} className="flex flex-col gap-6 xl:gap-4">
          <section className="flex flex-col gap-6 xl:gap-4">
            <h2 className="text-[1.75rem] leading-normal tracking-[1px]">{title}</h2>
            <p className="opacity-50">{description}</p>
          </section>

          <h6>$ {price}</h6>

          <section className="flex justify-start items-start gap-4">
            <div className="bg-white-dimmed w-30 h-12 flex justify-center items-center gap-[31px]">
              <span
                className="font-bold opacity-50"
                onClick={() => {
                  buttonRef.current.innerText = 'add to cart';
                  if (quantityRef.current.innerText === '1') return 1;

                  quantityRef.current.innerText =
                    parseInt(quantityRef.current.innerText) - 1;
                }}>
                -
              </span>
              <span ref={quantityRef} className="font-bold"></span>
              <span
                className="font-bold opacity-50"
                onClick={() => {
                  buttonRef.current.innerText = 'add to cart';

                  quantityRef.current.innerText =
                    parseInt(quantityRef.current.innerText) + 1;
                }}>
                +
              </span>
            </div>
            <AddToCart
              addToCart={() => {
                const quantity = parseInt(quantityRef.current.innerText);
                buttonRef.current.innerText = 'added to cart';
                dispatchToStore(data(image_mobile, title, price, quantity));
              }}
              ref={buttonRef}
            />
          </section>
        </div>
      ))}

      <Cart />
    </Fragment>
  );
};

export default ProductInfo;
