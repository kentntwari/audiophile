import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Menu from './components/menu';
import Footer from './components/footer';

const Home = lazy(() => import('./pages/home'));
const Categories = lazy(() => import('./pages/categories'));
const Category = lazy(() => import('./pages/categories/Category'));
const Products = lazy(() => import('./pages/products'));
const Product = lazy(() => import('./pages/products/Product'));
const Checkout = lazy(() => import('./pages/checkout'));
const Cart = lazy(() => import('./components/products/Cart'));
const Motto = lazy(() => import('./components/Motto'));

function App() {
  const location = useLocation();

  return (
    <Fragment>
      <Menu />
      <div className="relative px-app App">
        <Suspense
          fallback={
            <div className="w-full h-3/2 flex justify-center items-center">
              Loading...
            </div>
          }>
          <Cart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="categories" element={<Categories />}>
              <Route path=":category" element={<Category />} />
            </Route>
            <Route path="products" element={<Products />}>
              <Route path=":product" element={<Product />} />
            </Route>
            <Route path="checkout" element={<Checkout />} />
          </Routes>
          {location.pathname !== '/checkout' && <Motto />}
        </Suspense>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
