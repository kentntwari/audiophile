import React, { Fragment, useRef } from 'react';
import ButtonOrange from '../../components/buttons/ButtonOrange';

const ProductInfo = ({ info, dispatchToStore, storeActions, quantity }) => {
  const quantityRef = useRef();

  const { data, increaseQuantity, decreaseQuantity } = storeActions;

  return (
    <Fragment>
      {info.map(({ image_mobile, title, description, price }, index) => (
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

                  return dispatchToStore(decreaseQuantity);
                }}>
                -
              </span>
              <span ref={quantityRef} className="font-bold">
                {quantity}
              </span>
              <span
                className="font-bold opacity-50"
                onClick={() => dispatchToStore(increaseQuantity)}>
                +
              </span>
            </div>
            <ButtonOrange
              addToCart={() =>
                dispatchToStore(data(image_mobile, title, price, quantity))
              }>
              Add to cart
            </ButtonOrange>
          </section>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default ProductInfo;
