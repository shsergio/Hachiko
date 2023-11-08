// CartPage.jsx
import React from 'react';
import Navbar from '../Dashboard/Navbar';

const CartPage = ({ cartItems }) => {
  return (
    <div>
      <Navbar />
      <h1>Carrito de Compras</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
