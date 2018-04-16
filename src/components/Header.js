import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="nav-header">
    <ul className="main-nav">
      <li className="menu-list"><NavLink exact to="/">Home</NavLink></li>
      <li className="menu-list"><NavLink to="/about">About</NavLink></li>
      <li className="menu-list"><NavLink to="/gallery">Gallery</NavLink></li>
      <li className="menu-list"><NavLink to="/attractions">Attractions</NavLink></li>
    </ul>    
  </header>
);

export default Header;