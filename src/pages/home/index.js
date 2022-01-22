import React from 'react';
import FeaturedProduct from './FeaturedProduct';
import Categories from '../../components/products/Categories';
import UpgradeCTA from './UpgradeCTA';
import BuyProductOne from './BuyProductOne';
import BuyProductTwo from './BuyProductTwo';

const Home = () => {
  return (
    <main className="w-full flex flex-col gap-22">
      <FeaturedProduct />
      <Categories />
      <section className="flex flex-col gap-6">
        <UpgradeCTA />
        <BuyProductOne />
        <BuyProductTwo />
      </section>
    </main>
  );
};

export default Home;
