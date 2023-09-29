import React, { useState } from "react";
import axios from "axios";

function ProductForm() {
  const [product, setProduct] = useState({
    SKU: "",
    name: "",
    price: "",
    images: [""], // Initialize with one empty image field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageInputChange = (e, index) => {
    const updatedImages = [...product.images];
    updatedImages[index] = e.target.value;
    setProduct({ ...product, images: updatedImages });
  };

  const addImageField = () => {
    const updatedImages = [...product.images, ""];
    setProduct({ ...product, images: updatedImages });
  };

  const removeImageField = (index) => {
    const updatedImages = [...product.images];
    updatedImages.splice(index, 1);
    setProduct({ ...product, images: updatedImages });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/products/create", product);
      console.log("Product created");
      // Clear the form on success
      setProduct({
        SKU: "",
        name: "",
        price: "",
        images: [""],
      });
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div>
      <h2>Create a New Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>SKU:</label>
          <input
            type="text"
            name="SKU"
            value={product.SKU}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Images:</label>
          {product.images.map((imageUrl, index) => (
            <div key={index}>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => handleImageInputChange(e, index)}
                placeholder={`Image URL ${index + 1}`}
              />
              {index > 0 && (
                <button type="button" onClick={() => removeImageField(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addImageField}>
            Add Image
          </button>
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
