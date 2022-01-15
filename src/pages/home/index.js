import React from 'react';
import Header from './components/Header';
import Products from './components/Products';

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-22">
      <Header />
      <Products />
    </div>
  );
};

export default Home;
