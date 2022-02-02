import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import ListOfCategories from '../../components/products/Categories';
import useCategories from '../../utilities/hooks/useCategories';

const Categories = () => {
  let found;

  const { category } = useParams();

  const [...results] = useCategories();
  found = results.some((res) => res.category === category);

  return (
    <main>
      {category !== undefined && (
        <section className="relative flex justify-center items-center">
          <div className="w-full h-[102px] bg-black-full transform scale-x-125"></div>
          <h2
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
         text-white-full text-[1.75rem] leading-normal tracking-[2px]">
            {category}
          </h2>
        </section>
      )}

      {category !== undefined && (
        <div className="mt-16 flex flex-col gap-30">
          {found === true ? <Outlet /> : <h1>Not found</h1>}
        </div>
      )}

      <section className="mt-[10.75rem]">
        <ListOfCategories />
      </section>
    </main>
  );
};

export default Categories;
