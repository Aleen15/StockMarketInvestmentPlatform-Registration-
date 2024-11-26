import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SAFE CRYPTOSTOCKS</div>
      <ul className="navbar-links">
        <li><a href="/dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li>
        <li><a href="/market"><i className="fas fa-chart-area"></i> Market</a></li>
        <li><a href="/portfolio"><i className="fas fa-briefcase"></i> Portfolio</a></li>
        <li><a href="/budget"><i className="fas fa-wallet"></i> Budget</a></li>
        <li><a href="/learn"><i className="fas fa-book"></i> Learn</a></li>
      </ul>
      <button className="btn-get-started">My Profile</button>
    </nav>
  );
};

export default Navbar;
