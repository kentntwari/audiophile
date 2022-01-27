import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import Footer from './components/footer';
import Home from './pages/home';
import Motto from './components/Motto';
import Categories from './pages/categories';
import Category from './pages/categories/Category';
import Products from './pages/products';
import Product from './pages/products/Product';

function App() {
  return (
    <Fragment>
      <Router>
        <Menu />
        <div className="relative px-app App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="categories" element={<Categories />}>
              <Route path=":category" element={<Category />} />
            </Route>

            <Route path="products" element={<Products />}>
              <Route path=":product" element={<Product />} />
            </Route>
          </Routes>
          <Motto />
        </div>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
