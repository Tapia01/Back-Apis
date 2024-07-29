import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import "../pages/CarritoCompras.css";
import { useCarritoComprasLogic } from '../../hooks/orders'; // Asegúrate de que la ruta sea correcta

const CarritoCompras = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {}; // Desestructurando el producto desde el estado de la navegación
  const { orderData, handleInputChange, handleConfirmOrder } = useCarritoComprasLogic();

  const enterCheckout = () => {
    navigate("/checkout"); // Redirige a la página de pago
  };

  const formatPrice = (price) => {
    return typeof price === 'number' ? price.toFixed(2) : '0.00';
  };

  return (
    <div className="all-carrito">
      <div className="header">
        <h1>PACOSTore</h1> {/* Agregando la barra de encabezado */}
      </div>
      <div className="header-image">
        <img src="/Carrito.jpeg" id="carritobuy" alt="Carrito" />
      </div>
      <h1>Carrito de compras</h1>
      {product ? (
        <div className="box">
          <img src={product.image} alt={product.name} />
          <div className="item-details">
            <p>{product.name}</p>
            <p>${formatPrice(product.price)}</p>
            <Label text="Cantidad" />
            <Input id="quantity" type="number" min="1" value={orderData.quantity} onChange={handleInputChange} className="input-style" />
            {/* Aquí puedes agregar más detalles del producto y la funcionalidad del carrito */}
          </div>
          <Button text="Eliminar" onClick={() => { /* Aquí iría la lógica para eliminar el producto */ }} />
        </div>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
      <div className="form-section">
        <form onSubmit={async (e) => {
          e.preventDefault();
          const success = await handleConfirmOrder();
          if (success) {
            navigate(""); // Redirige a la página de entregas si el pedido es confirmado
          }
        }}>
          <Label text="Nombre" />
          <Input id="created_by" placeholder="Ingrese su nombre" value={orderData.created_by} onChange={handleInputChange} className="input-style" />
          <Label text="Dirección" />
          <Input id="address" placeholder="Ingrese su dirección" value={orderData.address} onChange={handleInputChange} className="input-style" />
          <Label text="Ciudad" />
          <Input id="city" placeholder="Ingrese su ciudad" value={orderData.city} onChange={handleInputChange} className="input-style" />
          <Label text="Estado" />
          <Input id="state" placeholder="Ingrese su estado" value={orderData.state} onChange={handleInputChange} className="input-style" />
          <Label text="Código Postal" />
          <Input id="zip_code" placeholder="Ingrese su código postal" value={orderData.zip_code} onChange={handleInputChange} className="input-style" />
          <div className="summary">
            <span className="summary-label">Subtotal:</span>
            <span className="summary-value">${formatPrice(product ? product.price : 0)}</span>
            <br />
            <span className="summary-label">Envío:</span>
            <span className="summary-value">Gratis</span>
            <br />
            <span className="summary-label">Total:</span>
            <span className="summary-value">${formatPrice(product ? product.price : 0)}</span>
          </div>
          <Button text="Confirmar Pedido" type="submit" className="confirm-button" />
        </form>
      </div>
      <Button text="Pagar" onClick={enterCheckout} className="checkout-button" />
    </div>
  );
};

export default CarritoCompras;
