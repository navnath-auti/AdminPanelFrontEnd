import React from "react";
// import Switch from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Switch } from "react-router-dom";
// import { BrowserRouter as Route } from "react-router-dom";

// import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Import the Layout component
import HomePage from "./components/HomePage";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductUpdateForm from "./components/ProductUpdateForm";
// import OrderHistory from "./components/OrderHistory";

function Routes1() {
  return (
    <Router>
      <Layout>
        {" "}
        {/* Wrap your routes with the Layout component */}
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/create" element={<ProductForm />} exact />
          <Route path="/products" element={<ProductList />} exact />
          <Route path="/edit/:sku" element={<ProductUpdateForm />} />
          {/* <Route path="/orders" component={OrderHistory} /> */}
          {/* Add other routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default Routes1;
