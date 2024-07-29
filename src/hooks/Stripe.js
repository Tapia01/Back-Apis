// ./src/stripeClient.js
import { loadStripe } from '@stripe/stripe-js';

// Reemplaza con tu clave pública de prueba
const stripePromise = loadStripe ('pk_test_your_public_key_here');

export default stripePromise;
