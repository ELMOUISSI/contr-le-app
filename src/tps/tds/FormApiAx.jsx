import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FormApi() {
  const [product,setProduct]= useState({});
  const [productList, setProductList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedList, setSelectedList] = useState();
  

  const getOneProducts = () => { 
    axios.get('https://fakestoreapi.com/products/1')
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  };

  const getProducts = () => { 
    axios.get('https://fakestoreapi.com/products')
      .then((response) => setProductList(response.data))
      .catch((error) => console.error(error));
  };

  const getCategories = () => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then((response) => setCategoriesList(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
    getCategories();
    getOneProducts();

   
  }, []);

  /*const displayInputsProduct = () => {
    return productList.map((product, index) => (
      <div key={index}>
        <label htmlFor={`product-${index}`}>Product {product.id}: </label>
        <input name={`product-id-${index}`} value={product.id} />
        <input name={`product-title-${index}`} value={product.title} />
        <input name={`product-description-${index}`} value={product.description} />
      </div>
    ));
  };
*/
  const displayInputsCategory = () => {
    return categoriesList.map((category, index) => (
      <div key={index}>
        <label htmlFor={`category-${index}`}>{category} categorie: </label>
        <input name={`category-${index}`} />
        <button> add </button>
      </div>
    ));
  };


const displayInputsAttrubis =()=>{
  return (  Object.keys(product).map((attr,idx)=>( 
    
     <div key={idx}>
      <label htmlFor=""> {attr}-label</label>
      <input type="text"  name={attr}/>
        
    </div>
    
    
  )
  ))
  //return ( <p> hello world</p>)
}

var selectedInputList = displayInputsAttrubis;
  
    if (selectedList === 'productList') {
      selectedInputList = displayInputsAttrubis;
    } else if (selectedList === 'categoriesList') {
      selectedInputList = displayInputsCategory;
    }



 const handleListChange = (event) => {
    setSelectedList(event.target.value);
    
  };

 
  console.log(displayInputsAttrubis())

  return (
    <div>
   
      <select name="listSelector" onChange={handleListChange} value={selectedList}>
        <option value="">Select a list</option>
        <option value="productList">Product List</option>
        <option value="categoriesList">Categories List</option>
      </select>

      {selectedInputList() }
    
     
    </div>
  );
}
