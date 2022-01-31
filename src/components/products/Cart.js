import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import ButtonOrange from '../buttons/ButtonOrange';

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => (
    <p className="opacity-50">No items in cart</p>
  ));

  const cart = useSelector((state) => state.cart);
  const display = useSelector((state) => state.displayCart);

  const cart_popUp = useRef();

  useEffect(() => {
    if (cart.length > 0)
      return setCartItems(() =>
        cart.map(({ image, item, price, quantity }, index, arr) => (
          <CartItem
            key={index}
            item_name={item}
            item_image={image}
            item_price={price}
            item_quantity={quantity}
            item_index={index}
            numberOfItems={arr.length}
          />
        ))
      );
  }, [cart, cart.length]);

  const total = useCallback(() => {
    return cart.reduce((acc, value) => (acc += value.price * value.quantity), 0);
  }, [cart]);

  return (
    <article className={` ${display === true ? 'block' : 'hidden'} w-full`}>
      <div className="absolute top-0 left-0 w-screen h-screen bg-black-full opacity-50"></div>
      <dialog
        ref={cart_popUp}
        open
        className="w-[20.43rem] rounded-md px-[28px] py-[33px] absolute top-[1.5rem]
           left-0 opacity-100 z-40 flex flex-col justify-start items-start gap-8">
        <section className="w-full flex justify-between items-start">
          <h6>
            cart <span>({cart.length})</span>
          </h6>
          <p className="underline opacity-50">Remove all</p>
        </section>

        <section className="w-full flex flex-col justify-start gap-6">
          {cartItems}
        </section>

        <section className="w-full flex justify-between items-center">
          <p className="uppercase opacity-50">Total</p>
          <h6 className="tracking-normal">$ {total()}</h6>
        </section>

        <Link to="/checkout" className="w-full" state={{ cart }}>
          <ButtonOrange addClass={['w-full']} removeClass={['w-40']}>
            checkout
          </ButtonOrange>
        </Link>
      </dialog>
    </article>
  );
};

export default Cart;
