import React from 'react';

const BoxItems = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row xl:flex-col justify-start items-start gap-6 lg:gap-[9.9rem] xl:gap-6">
      <h2 className="text-[1.75rem] leading-normal tracking-[1px]">in the box</h2>
      <div className="flex flex-col gap-[8px]">
        {data === null ? (
          <p>Loading...</p>
        ) : (
          data.map(({ item, quantity }, index) => (
            <div key={index} className="flex justify-start items-center gap-5">
              <p className="uppercase font-bold text-orange-full">{quantity}x</p>
              <p className="opacity-50">{item}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BoxItems;
