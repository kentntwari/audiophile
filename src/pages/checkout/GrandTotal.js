import React from 'react';

const GrandTotal = ({ data }) => {
  return (
    <section className="w-full flex justify-between items-center">
      <p className="uppercase opacity-50">Grand total</p>
      <p className="uppercase font-bold text-[18px] text-orange-full">
        $ <span>{data}</span>
      </p>
    </section>
  );
};

export default GrandTotal;
