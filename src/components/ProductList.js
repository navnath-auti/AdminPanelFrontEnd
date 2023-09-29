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

  const deleteProduct = async (skuToDelete) => {
    try {
      // Make a DELETE request to the delete API endpoint with the SKU as a parameter
      await axios.delete(
        `http://localhost:5000/api/products/delete/${skuToDelete}`
      );

      // Remove the deleted product from the state
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.SKU !== skuToDelete)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

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
            <button onClick={() => deleteProduct(product.SKU)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
