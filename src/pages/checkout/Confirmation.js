import React from 'react';
import { Link } from 'react-router-dom';
import ButtonOrange from '../../components/buttons/ButtonOrange';

const Confirmation = React.forwardRef((props, ref) => {
  return (
    <article ref={ref} className="w-full hidden">
      <div className="absolute -top-[25px] left-0 w-screen h-screen bg-black-full opacity-50"></div>
      <dialog
        open
        className="w-[20.43rem] rounded-md px-[28px] py-[33px] absolute top-[1.5rem] left-0
         opacity-100 z-40 flex flex-col justify-start items-start gap-6">
        <i className="fas fa-check-circle text-orange-full"></i>
        <h5 className="tracking-[0.86px]">Thank you for your order</h5>
        <p className="opacity-50">You will receive an email confirmation</p>

        <Link
          to="/"
          className="w-full"
          onClick={() =>
            document.body.classList.replace('overflow-hidden', 'overflow-auto')
          }>
          <ButtonOrange addClass={['w-full']} removeClass={['w-40']}>
            back to home
          </ButtonOrange>
        </Link>
      </dialog>
    </article>
  );
});

export default Confirmation;
