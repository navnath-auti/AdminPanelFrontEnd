import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create Product</Link>
        </li>
        <li>
          <Link to="/products">All Products</Link>
        </li>
        <li>
          <Link to="/orders">Order History</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
