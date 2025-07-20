import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="header">
      <Link to="/">Eduverse</Link>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/my-courses">My Courses</Link>
      </div>
    </nav>
  );
}

export default Header;