import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
  return (
    <Fragment>
      <Router>
        <Menu />
        <div className="relative px-app App">
          <Suspense fallback={<div>Loading...</div>}>
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
            <Motto />
          </Suspense>
        </div>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
