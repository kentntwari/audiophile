import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../client';

const Links = () => {
  const [links, setLinks] = useState(null);

  useEffect(() => {
    return sanityClient
      .fetch(`*[_type =='category'] | order(_createdAt){title}`)
      .then((res) => setLinks(res));
  }, []);

  return (
    <ul className="w-full text-center flex flex-col lg:flex-row gap-4 lg:gap-[2.125rem]">
      <li>
        <Link
          to="/"
          className="font-bold uppercase text-xsm text-white-full tracking-[2px]"
          onClick={() => window.scrollTo(0, 0)}>
          Home
        </Link>
      </li>
      {links &&
        links.map(({ title }, index) => (
          <li key={index}>
            <Link
              to={`/categories/${title}`}
              className="font-bold uppercase text-xsm text-white-full tracking-[2px]"
              onClick={() => window.scrollTo(0, 0)}>
              {title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Links;
