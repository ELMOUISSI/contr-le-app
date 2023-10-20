import React, { useEffect, useState } from 'react';
import Prodacut from './Prodacut';
import './Prodacut.css';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [searchinput, setsearchinput] = useState('');
  const [categoriesList, setCategoriesList] = useState([]); // Add this line

 
  const displayCategories = () => {
    return (
      <div>
        <button
          className={`btn btn-secondary ${categoriesList === null ? 'active' : ''}`}
          onClick={() => setProductList(ProductList)}
        >
          All
        </button>
        {categoriesList.map((category, index) => (
          <button
            className={`btn btn-secondary ${categoriesList === category ? 'active' : ''}`}
            key={index}
            onClick={() => setProductList(productList.filter((pdt)=>{return pdt.category === category}))}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };

  const displayProducts = () => {
    const productTemp = productList.filter(product => {
      return product.title.includes(searchinput) ||
        product.id.toString().includes(searchinput) ||
        product.description.includes(searchinput);
    });

    if (productTemp.length > 0) {
      return productTemp.map((product, key) => {
        return <Prodacut product={product} key={key} />;
      });
    } else {
      return <p>No matching products found.</p>;
  
    }
  };

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProductList(data));
  };

  const getCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategoriesList(data)); // Update state with fetched categories
  };

  useEffect(() => {
    getProducts();
    getCategories();
    
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = document.querySelector('#search').value;
    setsearchinput(searchValue);
  };

  return (
    <div className="container-fluid mx-auto w-75 my-3">
      <h2>Search:</h2>
      
      <form action="">
        <div>
          <label>Search</label>
          <input type="text" id='search' className='form-control' />
        </div>
        <input type="submit" value='Search' onClick={handleSearch} />
      </form>
      <h5>Categories</h5>
      <div className='btn-group'>
        {displayCategories()}
      </div>
      <h1>List of Products:</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{displayProducts()}</tbody>
      </table>
    </div>
  );
};

export default ProductList;