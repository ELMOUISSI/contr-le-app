import React, { useState } from 'react';

const AddProductForm = () => {
  const [product, setProduct] = useState({
    id: 1,
    title: '',
    price: 0,
    description: '',
    category: "men's clothing",
    image: '',
    rating: {
      rate: 3.9,
      count: 120
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle adding the product to your data store or API here
    console.log('Product added:', product);
    // Clear the form or perform any additional actions as needed
    setProduct({
      id: product.id + 1, // Increment the ID for the next product
      title: '',
      price: 0,
      description: '',
      category: "men's clothing",
      image: '',
      rating: {
        rate: 3.9,
        count: 120
      }
    });
  };

  return (
    <div>
      <h2>Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
