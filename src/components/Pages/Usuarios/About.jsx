import React, { useState } from 'react';
import Navbar from '../Dashboard/Navbar';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Welcome = () => {
  const [cartItems, setCartItems] = useState([]);
  const [addedItem, setAddedItem] = useState('');
  const [showModal, setShowModal] = useState(false);

  const addToCart = (product) => {
    const imageName = product.name.replace(/\s+/g, '').toLowerCase();
    product.image = `/images/${imageName}.jpg`;
    setCartItems([...cartItems, product]);
    setAddedItem(product.name);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePaymentSuccess = () => {
    // Aquí puedes realizar cualquier lógica adicional después de que el pago sea exitoso
    // Por ejemplo, limpiar el carrito de compras
    setCartItems([]);
    closeModal();
  };

  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <div className="hero-container">
          <h1>Catalogo de Productos</h1>
          <p>Explora nuestra increíble selección de productos</p>
        </div>
      </div>

      <div className="hero-section">
        
        <h1>Ubica tu sucursal más cercana</h1>
        <p>¡Hachiko te espera!</p>
        
      </div>

      <div className="card-container-2">
        {/* Card 1 */}
        <div className="card">
          <img src="/images/caf.jpg" alt="Imagen 1" />
          <h3>Siente la frescura</h3>
          
            <PayPalScriptProvider>
        <PayPalButtons/>
          
      </PayPalScriptProvider>
        
          <p>El mejor sentimiento</p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src="/images/huy.jpg" alt="" />
          <h3>Siente la frescura</h3>
         
            <PayPalScriptProvider>
        <PayPalButtons/>
          
      </PayPalScriptProvider>
         
        </div>


      


       
      </div>

      
        {/* Botón para abrir el modal de PayPal */}
        
      
      <Modal isOpen={showModal} onRequestClose={closeModal} contentLabel="Pagar con PayPal">
        
        
        
        
      </Modal>
    </div>
    
  
  );
};

export default Welcome;
