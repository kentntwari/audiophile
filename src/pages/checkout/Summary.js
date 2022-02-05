import React, { useState, useRef, useEffect, createRef } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CartItem from './CartItem';
import Total from './Total';
import Shipping from './Shipping';
import Vat from './Vat';
import GrandTotal from './GrandTotal';
import Confirmation from './Confirmation';
import ButtonOrange from '../../components/buttons/ButtonOrange';

const Summary = () => {
  let location = useLocation();
  const cart = location.state.cart;
  const total = location.state.total;

  const total_ref = useRef(total);
  const shipping_ref = useRef(50);
  const vat_ref = useRef((total * 20) / 100);

  const confirm_modal_ref = createRef();

  const [grand_total, setGrand_total] = useState(null);

  useEffect(() => {
    return setGrand_total(
      () => total_ref.current + shipping_ref.current + vat_ref.current
    );
  }, [total_ref, shipping_ref, vat_ref]);

  return (
    <article className="p-6 w-full bg-white-full flex flex-col justify-start items-start gap-8">
      <h6>Summary</h6>

      <div className="w-full flex flex-col gap-6">
        {cart.map(({ image, item, price, quantity }) => (
          <CartItem
            key={uuidv4()}
            item={item}
            image={image}
            price={price}
            quantity={quantity}
          />
        ))}

        <Total total={total_ref.current} />
        <Shipping shipping={shipping_ref.current} />
        <Vat vat={vat_ref.current} />
        <GrandTotal data={grand_total} />
        <Confirmation ref={confirm_modal_ref} />
        <ButtonOrange
          addClass={['w-full']}
          removeClass={['w-40']}
          onClick={() => {
            window.scrollTo(0, 0);
            document.body.classList.toggle('overflow-hidden');
            confirm_modal_ref.current.classList.toggle('hidden');
          }}>
          continue {'&'} pay
        </ButtonOrange>
      </div>
    </article>
  );
};

export default Summary;
