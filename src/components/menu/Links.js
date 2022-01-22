import React, { useState, useEffect } from 'react';
import sanityClient from '../../client';

const Links = () => {
  const [links, setLinks] = useState(null);

  useEffect(() => {
    return sanityClient
      .fetch(`*[_type =='category'] | order(_createdAt){title}`)
      .then((res) => setLinks(res));
  }, []);

  return (
    <ul className="w-full text-center flex flex-col gap-4">
      <li>
        <a
          href="/"
          className="font-bold uppercase text-xsm text-white-full tracking-[2px]">
          Home
        </a>
      </li>
      {links &&
        links.map(({ title }, index) => (
          <li key={index}>
            <a
              href="/"
              className="font-bold uppercase text-xsm text-white-full tracking-[2px]">
              {title}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default Links;
