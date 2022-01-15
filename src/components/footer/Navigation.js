import React from 'react';

const Navigation = () => {
  return (
    <ul className="w-full text-center flex flex-col gap-4">
      <li>
        <a
          href="/"
          className="font-bold uppercase text-xsm text-white-full tracking-[2px]">
          Home
        </a>
      </li>
      <li>
        <a href="/" className="uppercase text-xsm text-white-full tracking-[2px]">
          Headphones
        </a>
      </li>
      <li>
        <a href="/" className="uppercase text-xsm text-white-full tracking-[2px]">
          Speakers
        </a>
      </li>
      <li>
        <a href="/" className="uppercase text-xsm text-white-full tracking-[2px]">
          Earphones
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
