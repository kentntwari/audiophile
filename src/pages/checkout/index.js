import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Form from './Form';
import Summary from './Summary';

const Checkout = () => {
  let navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  return (
    <Fragment>
      <section className="mt-5">
        <p className="opacity-50" onClick={() => navigate(-1)}>
          Go Back
        </p>
      </section>

      <main className="mt-6 flex flex-col gap-8">
        <Form />
        {cart.length > 0 && <Summary />}
      </main>
    </Fragment>
  );
};

export default Checkout;
