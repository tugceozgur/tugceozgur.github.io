import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;