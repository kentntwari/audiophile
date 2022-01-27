import React, { Fragment } from 'react';

const Gallery = ({ pictures }) => {
  return (
    <section>
      {pictures && (
        <Fragment>
          <div className="flex flex-col justify-start items-start gap-5">
            {pictures.mobile.map((img, index) => (
              <img
                key={index}
                className="rounded-md"
                src={img}
                alt={`product-in-action-${index + 1}`}
              />
            ))}
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default Gallery;
