import React from "react";
 import "./Web.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">MDCOM</div>
      <nav className="nav-links">
        <span>Home</span>
        <span>Shop All</span>
        <span>Blog</span>
        <span>About Us</span>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search Product..." />
      </div>
    </header>
  );
};

export default Header;