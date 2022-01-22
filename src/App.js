import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import Footer from './components/footer';
import Home from './pages/home';
import Motto from './components/Motto';

function App() {
  return (
    <Fragment>
      <Menu />
      <Router>
        <div className="relative px-app App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Motto />
        </div>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
