import React, { Fragment } from 'react';

const Features = ({ data }) => {
  return (
    <Fragment>
      {data.map(({ feature_one, feature_two }, index) => (
        <div key={index} className="flex flex-col gap-6">
          <h2 className="text-[1.75rem] leading-normal tracking-[1px]">Features</h2>
          <p className="opacity-50">{feature_one}</p>
          <p className="opacity-50">{feature_two}</p>
        </div>
      ))}
    </Fragment>
  );
};

export default Features;
