import React from 'react';

import FeaturedProduct from './FeaturedProduct';
import UpgradeCTA from './UpgradeCTA';
import BuyProductOne from './BuyProductOne';
import BuyProductTwo from './BuyProductTwo';

import Categories from '../../components/products/Categories';

const Home = () => {
  return (
    <main className="w-full flex flex-col gap-22">
      <FeaturedProduct />
      <Categories applyClass="md:mt-24 lg:mt-60 2xl:mt-20 2xl:mx-auto" />

      <section className="w-full flex flex-col gap-6">
        <UpgradeCTA />
        <BuyProductOne />
        <BuyProductTwo />
      </section>
    </main>
  );
};

export default Home;
