import React from 'react';

const Vat = ({ vat }) => {
  return (
    <section className="w-full flex justify-between items-center">
      <p className="uppercase opacity-50">VAT(included)</p>
      <p className="uppercase font-bold text-[18px]">
        $ <span>{vat}</span>
      </p>
    </section>
  );
};

export default Vat;
