import React from 'react';
import useProductOrders from '../../hooks/Delivery'; // Asegúrate de que la ruta sea correcta
import './Delivery.css';

const NavBar = () => (
  <nav className="navbar">
    <ul>
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#productos">Productos</a></li>
      <li><a href="#contactos">Contactos</a></li>
      <li><a href="#pedidos">Pedidos</a></li>
    </ul>
  </nav>
);

const DeliveryHeader = () => (
  <header className="delivery-header">
    <NavBar />
    <h1>Detalles de Pedidos</h1>
  </header>
);

const OrderTable = ({ orders }) => (
  <table className="order-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Cliente</th>
        <th>Dirección</th>
        <th>Ciudad</th>
        <th>Estado</th>
        <th>Código Postal</th>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Total</th>
        <th>Estado</th>
      </tr>
    </thead>
    <tbody>
      {orders.map(order => (
        <tr key={order.order_id}>
          <td>{order.order_id}</td>
          <td>{order.created_by}</td>
          <td>{order.address}</td>
          <td>{order.city}</td>
          <td>{order.state}</td>
          <td>{order.zip_code}</td>
          <td>{order.product_id}</td>
          <td>{order.quantity}</td>
          <td>${order.total}</td>
          <td>{order.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Delivery = () => {
  const { orders, loading, error } = useProductOrders();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="delivery-container">
      <DeliveryHeader />
      {orders.length > 0 ? <OrderTable orders={orders} /> : <p>No orders found</p>}
    </div>
  );
};

export default Delivery;
