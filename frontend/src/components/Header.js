import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <h1>Inventory Management System</h1>
      <div className="navbar-right">
        <Link to="/cart">
          <p>🛒</p>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
