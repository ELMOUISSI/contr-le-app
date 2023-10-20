import React from 'react';
import './Prodacut.css';
const Prodacut = ({ product }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.description.slice(0,50)}</td>
      <td>{product.category}</td>
      <td><img src={product.image} alt={product.title} /> </td>
      <td > <p className='bg-primary'>{product.rating.rate}/5</p></td>
    </tr>
  );
};

export default Prodacut;
