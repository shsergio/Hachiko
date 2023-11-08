// src/pages/Home.jsx
import React from 'react';
import Navbar from '../Dashboard/Navbar';


const Welcome = () => {
  return (


    <div>
      <Navbar />
      <div className="hero-section">
        <div className="hero-container">
          <h1>Bienvenido a nuestra tienda</h1>
          <p>Explora nuestra increíble selección de productos</p>
          <img src="/images/piz.jpg" alt="Imagen 1"className="hero-image" />
            
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <img src="/images/palitos.jpeg" alt="Imagen 1" />
          <h3>Paquete express</h3>
          <p>Prueba la sensacion con nuestras bebidas</p>
        </div>
        <div className="card">
          <img src="/images/caja.png" alt="Imagen 2" />
          <h3>Martini</h3>
          <p>Con fruta de piña y melocoton</p>
        </div>
        <div className="card">
          <img src="/images/ariel.jpeg" alt="Imagen 3" />
          <h3>Frasco con Coca Cola</h3>
          <p>Refrescate en esta calor</p>
        </div>
      </div>

      <div className="hero-section">
        <h1>Ubica tu sucursal más cercana</h1>
        <p>¡Hachiko te espera!</p>
      </div>

      <div className="card-container-2">
        <div className="card">
          <img src="/images/domicilio.jpeg" alt="Imagen 1" />
          <h3>Paquete a solo $5.67</h3>
          <p>No pierdas esta oportunidad</p>
        </div>
        <div className="card">
  <img src="/images/fr.png" alt="" />
  <h3>Hachiko Bubba Tea</h3>
  <p> Hora de inicio 13:00  - Hora de cierre 21:00</p>
  <a
    href="https://www.google.com.mx/maps/place/Hachiko+Boba+Tea+La+Costa/@21.1560152,-86.8423353,17z/data=!3m1!4b1!4m6!3m5!1s0x8f4c2b8938335faf:0xddf7096d3b005a2c!8m2!3d21.1560102!4d-86.8397604!16s%2Fg%2F11pdvwvmj2?entry=ttu"
    target="_blank"
    rel="noopener noreferrer"
  >
    Ver en Google Maps
  </a>
</div>

        <div className="card">
          <img src="/images/hachi.jpeg" alt="Imagen 3" />
          <h3>Refrescate con Cocal + Hielo full</h3>
          <p>Tamaño de 1.5 litros</p>
        </div>
      </div>

      <div className="hero-section">
        <h1>Ubica tu sucursal más cercana</h1>
        <p>¡Hachiko te espera!</p>
      </div>

     
    </div>
  );
};

export default Welcome;
