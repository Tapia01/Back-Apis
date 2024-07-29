// ./src/pages/CheckoutPage.jsx
import React from 'react';
import Checkout from '../components/CheckoutForm'; // Asegúrate de que la ruta sea correcta

const CheckoutPage = () => (
  <div style={{ padding: '20px', backgroundColor: '#f7f7f7' }}>
    <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Checkout</h1>
    <Checkout />
  </div>
);

export default CheckoutPage;
