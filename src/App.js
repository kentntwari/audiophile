import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/menu';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Home />
      </div>
    </Router>
  );
}

export default App;
