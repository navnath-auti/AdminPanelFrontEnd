import React from "react";

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Admin Panel</h1>
      <nav>
        <ul>
          <li>
            <a href="/create">Create Product</a>
          </li>
          <li>
            <a href="/products">All Products</a>
          </li>
          <li>
            <a href="/orders">Order History</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
