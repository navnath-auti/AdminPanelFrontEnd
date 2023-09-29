import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/products/getAll"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h2>Product: {product.name}</h2>
            <p>SKU: {product.SKU}</p>
            <p>Price: ${product.price}</p>
            <div>
              <h3>Images:</h3>
              {product.images.map((imageUrl, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imageUrl}
                  alt={`Image ${imgIndex + 1}`}
                  style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    marginRight: "10px",
                  }}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
