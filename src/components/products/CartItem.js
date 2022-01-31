import React, { createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../../global/features/cart/cartSlice';

const CartItem = ({
  item_name,
  item_image,
  item_price,
  item_quantity,
  item_index,
  numberOfItems,
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function updateCartItems(currentQuantity) {
    cart.map((x, index) => {
      if (index === item_index) {
        let {
          image,
          item,
          price,
          quantity: item_quantity,
        } = {
          ...x,
          quantity: currentQuantity,
        };

        dispatch(updateCart(index, image, item, price, item_quantity));
      }

      return x;
    });
  }

  const itemRef = Array(numberOfItems)
    .fill(null)
    .map((_, index, arr) => (arr[index] = createRef()));

  const quantity = Array(numberOfItems)
    .fill(null)
    .map((_, index, arr) => (arr[index] = createRef()));

  const decrementorRef = Array(numberOfItems)
    .fill(null)
    .map((_, index, arr) => (arr[index] = createRef()));

  const incrementorRef = Array(numberOfItems)
    .fill(null)
    .map((_, index, arr) => (arr[index] = createRef()));

  return (
    <div ref={itemRef[item_index]} className="w-full flex justify-between items-center">
      <div className="w-[9.688rem] flex justify-start items-center gap-4">
        <img
          className="w-16 h-16 rounded-lg object-cover"
          src={item_image}
          alt={item_name}
        />

        <div>
          <p className="uppercase font-bold tracking-normal">{item_name.split(' ')[0]}</p>
          <p className="uppercase font-bold text-[0.875rem] opacity-50 tracking-normal">
            ${item_price}
          </p>
        </div>
      </div>
      <div className="w-[6rem] h-[2rem] bg-white-dimmed flex justify-center items-center gap-6">
        <span
          className="opacity-25"
          ref={decrementorRef[item_index]}
          onClick={(e) => {
            let currentQuantity = quantity[item_index].current.innerText;
            let parsedQuantity = parseInt(currentQuantity);

            parsedQuantity > 1
              ? (quantity[item_index].current.innerText = parsedQuantity - 1)
              : (quantity[item_index].current.innerText = 1);

            updateCartItems(parseInt(quantity[item_index].current.innerText));
          }}>
          -
        </span>
        <span ref={quantity[item_index]}>{item_quantity}</span>
        <span
          ref={incrementorRef[item_index]}
          className="opacity-25"
          onClick={() => {
            let currentQuantity = quantity[item_index].current.innerText;
            let parsedQuantity = parseInt(currentQuantity);

            quantity[item_index].current.innerText = parsedQuantity + 1;

            updateCartItems(parseInt(quantity[item_index].current.innerText));
          }}>
          +
        </span>
      </div>
    </div>
  );
};

export default CartItem;
