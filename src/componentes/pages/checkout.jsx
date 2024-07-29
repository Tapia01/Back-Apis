// ./src/components/CheckoutForm.jsx
import React, { useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import stripePromise from '../../hooks/Stripe';
import './checkout.css';

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('card'); // Estado para seleccionar el método de pago
  const stripe = useStripe();
  const elements = useElements();

  const handleCardSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      // Enviar paymentMethod.id al servidor para completar el pago
      console.log('PaymentMethod:', paymentMethod);
      // Aquí iría la lógica para redirigir al usuario a una página de confirmación
    }
  };

  const handleReferenceSubmit = async (event) => {
    event.preventDefault();
    // Aquí iría la lógica para generar una referencia de pago
    console.log('Generar referencia de pago');
    // Redirigir al usuario o mostrar un mensaje de confirmación
  };

  return (
    <>
      <div className="header-bar">PACOSTore</div>
      <main className='metodo-pago'>
        <div className="checkout-form">
          <h1>Checkout</h1>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="payment-method"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
              />
              Pago con tarjeta
            </label>
            <label>
              <input
                type="radio"
                name="payment-method"
                value="reference"
                checked={paymentMethod === 'reference'}
                onChange={() => setPaymentMethod('reference')}
              />
              Generar referencia de pago
            </label>
          </div>
          {paymentMethod === 'card' ? (
            <form onSubmit={handleCardSubmit}>
              <div className="card-element">
                <CardElement />
              </div>
              <button type="submit" disabled={!stripe}>
                Pay
              </button>
              <p>Estas a un paso de completar tu compra, sigue los pasos...</p>
            </form>
          ) : (
            <form onSubmit={handleReferenceSubmit}>
              <div className="reference-info">
                <p>Selecciona la opción para generar una referencia de pago. Recibirás la referencia por correo electrónico.</p>
                {/* Puedes agregar campos adicionales aquí si es necesario */}
              </div>
              <button type="submit">
                Generar Referencia
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  );
};

const Checkout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Checkout;
