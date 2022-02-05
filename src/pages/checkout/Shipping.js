import React from 'react';

const Shipping = ({ shipping }) => {
  return (
    <section className="w-full flex justify-between items-center">
      <p className="uppercase opacity-50">Shipping</p>
      <p className="uppercase font-bold text-[18px]">
        $ <span>{shipping}</span>
      </p>
    </section>
  );
};

export default Shipping;
