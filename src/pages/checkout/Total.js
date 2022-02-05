import React from 'react';

const Total = ({ total }) => {
  return (
    <section className="w-full flex justify-between items-center">
      <p className="uppercase opacity-50">Total</p>
      <p className="uppercase font-bold text-[18px]">
        $ <span>{total}</span>
      </p>
    </section>
  );
};

export default Total;
