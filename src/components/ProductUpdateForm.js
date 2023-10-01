// ProductUpdateForm.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ProductUpdateForm() {
  const [originalProduct, setOriginalProduct] = useState({
    name: "",
    price: "",
    images: [""],
  });

  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    price: "",
    images: [""],
  });

  const { sku } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProductData() {
      try {
        const response = await axios.get(`/api/products/${sku}`);
        const productData = response.data;
        setOriginalProduct(productData);
        setUpdatedProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProductData();
  }, [sku]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare the updated product data by merging with original values
      const updatedData = {
        ...originalProduct,
        ...updatedProduct,
      };

      await axios.put(
        `http://localhost:5000/api/products/update/${sku}`,
        updatedData
      );

      console.log("Product updated successfully");
      navigate("/products");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleImageInputChange = (e, index) => {
    const updatedImages = [...updatedProduct.images];
    updatedImages[index] = e.target.value;
    setUpdatedProduct({ ...updatedProduct, images: updatedImages });
  };

  const addImageField = () => {
    const updatedImages = [...updatedProduct.images, ""];
    setUpdatedProduct({ ...updatedProduct, images: updatedImages });
  };

  const removeImageField = (index) => {
    const updatedImages = [...updatedProduct.images];
    updatedImages.splice(index, 1);
    setUpdatedProduct({ ...updatedProduct, images: updatedImages });
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={updatedProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Images:</label>
          {updatedProduct.images.map((imageUrl, index) => (
            <div key={index}>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => handleImageInputChange(e, index)}
                placeholder={`Image URL ${index + 1}`}
              />
              <button type="button" onClick={() => removeImageField(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addImageField}>
            Add Image
          </button>
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default ProductUpdateForm;
