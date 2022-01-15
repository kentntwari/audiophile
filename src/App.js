import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/menu';
import Home from './pages/home';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
