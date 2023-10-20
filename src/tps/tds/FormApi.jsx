import React, { useEffect, useState } from 'react';

export default function FormApi() {
  const [productList, setProductList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedList, setSelectedList] = useState(null);

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => setProductList(data));
  };

  const getCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategoriesList(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const displayInputsProduct = () => {
    return productList.map((product, index) => (
      <div key={index}>
        <label htmlFor={`product-${index}`}>Product {product.id}: </label>
        <input name={`product-id-${index}`} value={product.id} />
        <input name={`product-title-${index}`} value={product.title} />
        <input name={`product-description-${index}`} value={product.description} />
      
      </div>
    ));
  };

  const displayInputsCategory = () => {
    return categoriesList.map((category, index) => (
      <div key={index}>
        <label htmlFor={`category-${index}`}>{category} categorie: </label>
        <input name={`category-${index}`} />
      </div>
    ));
  };

  const handleListChange = (event) => {
    setSelectedList(event.target.value);
  };

  let selectedInputList = null;
  if (selectedList === 'productList') {
    selectedInputList = displayInputsProduct();
  } else if (selectedList === 'categoriesList') {
    selectedInputList = displayInputsCategory();
  }

  return (
    <div>
      <select name="listSelector" onChange={handleListChange} value={selectedList}>
        <option value="">Select a list</option>
        <option value="productList">Product List</option>
        <option value="categoriesList">Categories List</option>
      </select>

      {selectedInputList}
    </div>
  );
}
