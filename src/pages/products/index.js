import React from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import Categories from '../../components/products/Categories';

const Products = () => {
  const { product } = useParams();
  let navigate = useNavigate();

  return (
    <main className="flex flex-col gap-43">
      {product && (
        <section className="2xl:w-[1110px] 2xl:mx-auto mt-5 2xl:mt-[79px] flex flex-col gap-8">
          <p className="opacity-50 cursor-pointer" onClick={() => navigate(-1)}>
            Go Back
          </p>
          <Outlet />
        </section>
      )}

      <div className={`${!product ? 'mt-30' : 'lg:-mt-[9.25rem]'} 2xl:w-fit 2xl:mx-auto`}>
        <Categories />
      </div>
    </main>
  );
};

export default Products;
