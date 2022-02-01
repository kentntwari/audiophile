import React, { lazy, Suspense } from 'react';

const FeaturedProduct = lazy(() => import('./FeaturedProduct'));
const Categories = lazy(() => import('../../components/products/Categories'));
const UpgradeCTA = lazy(() => import('./UpgradeCTA'));
const BuyProductOne = lazy(() => import('./BuyProductOne'));
const BuyProductTwo = lazy(() => import('./BuyProductTwo'));

const Home = () => {
  return (
    <main className="w-full flex flex-col gap-22">
      <FeaturedProduct />
      <Categories />
      <section className="flex flex-col gap-6">
        <Suspense fallback={<div className="w-full h-3/6">Loading...</div>}>
          <UpgradeCTA />
          <BuyProductOne />
          <BuyProductTwo />
        </Suspense>
      </section>
    </main>
  );
};

export default Home;
