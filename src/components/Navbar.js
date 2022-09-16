import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand">
      Navbar
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <div className="navbar-toggler-icon">Here</div>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/" className="nav-link">
            Home
            <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Features
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Pricing
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link disabled">
            Disabled
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
