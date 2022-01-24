import React from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import Categories from '../../components/products/Categories';

const Products = () => {
  const { product } = useParams();

  let navigate = useNavigate();

  return (
    <main className="flex flex-col gap-43">
      {product !== undefined && (
        <section className="mt-5 flex flex-col gap-8">
          <p className="opacity-50" onClick={() => navigate(-1)}>
            Go Back
          </p>
          <Outlet />
        </section>
      )}

      <div className={product === undefined ? 'mt-30' : undefined}>
        <Categories />
      </div>
    </main>
  );
};

export default Products;
