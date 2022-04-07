import React, { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Gallery = ({ pictures }) => {
  const placeImageInGrid = useCallback((index) => {
    if (index === 1) return 'col-start-1';
    if (index === 2) return 'md:col-start-2 row-start-1 row-end-3';
  }, []);

  return (
    <section className="w-full 2xl:w-[1110px] flex justify-center">
      {pictures && (
        <div className="w-full md:w-fit mx-auto grid grid-cols-1
         md:grid-cols-2 2xl:grid-cols-[445px_635px] items-center lg:items-start gap-5">
          {pictures.mobile.map((img, index) => (
            <img
              key={uuidv4()}
              className={`${placeImageInGrid(
                index
              )} w-[327px] md:w-full rounded-md 2xl:hidden`}
              src={img}
              alt={`product-in-action-${index + 1}`}
            />
          ))}

          {pictures.desktop.map((img, index) => (
            <img
              key={uuidv4()}
              className={`hidden ${placeImageInGrid(index)} rounded-md 2xl:block`}
              src={img}
              alt={`product-in-action-${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
