import React from 'react';
import FeaturedProduct from './components/FeaturedProduct';
import Categories from '../../components/products/Categories';
import UpgradeCTA from './components/UpgradeCTA';

const Home = () => {
  return (
    <main className="w-full flex flex-col gap-22">
      <FeaturedProduct />
      <Categories />
      <section className="flex flex-col gap-6">
        <UpgradeCTA />
      </section>
    </main>
  );
};

export default Home;
