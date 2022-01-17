import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import Footer from './components/footer';
import Home from './pages/home';
import Sneakpeak from './components/Sneakpeak';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Sneakpeak />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
