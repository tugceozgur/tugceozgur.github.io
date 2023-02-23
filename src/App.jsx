import React from "react";
import Card from './Card';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/home'} className="nav-link"> Home </Link></li>
            <li><Link to={'/about'} className="nav-link">Card</Link></li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route path='/about' element={<Card />} />
        </Routes>
      </div>
    </Router>
  );
}