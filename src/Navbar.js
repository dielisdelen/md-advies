import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import CV from './components/CV';
import Verhaaltjes from './components/Verhaaltjes';
import OverMaarten from './components/OverMaarten';
import Contact from './components/Contact';

import './App.css';
import logo from './images/Logo_md-advies.svg';

function Navbar() {
    return (
      <Router>
        <nav>
          <div className="nav-container">
            <img src={logo} alt="Logo" className="logo" />
            <div className='spacer'></div>
            <ul className='nav-list'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cv">CV</Link></li>
              <li><Link to="/verhaaltjes">Verhaaltjes</Link></li>
              <li><Link to="/overmaarten">Over Maarten</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/verhaaltjes" element={<Verhaaltjes />} />
          <Route path="/overmaarten" element={<OverMaarten />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  }
  
  export default Navbar;