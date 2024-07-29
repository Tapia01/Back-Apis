// src/componentes/pages/AgregarProductos.jsx
import React from 'react';
import "../pages/AgregarProducto.css";
import { useAgregarProducto } from '../../hooks/useAgregarProducto';

const AgregarProductos = () => {
    const { productData, handleInputChange, handleFormSubmit, handleDelete, productos, loading } = useAgregarProducto();

    return (
        <div className="container">
            <header className="header">
                <h1>PacoStore</h1>
                <a href="/BienvenidoPaco" className="btn-regresar">Inicio</a>
            </header>
            <div className="formularios">
                <div className="formulario">
                    <h2>Agregar Producto</h2>
                    <form onSubmit={(event) => handleFormSubmit(event, false)}>
                        <div>
                            <label htmlFor="name" className="label-form">Nombre del producto:</label>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="Ingrese el nombre del Producto." 
                                value={productData.name}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="price">Precio del producto:</label>
                            <input 
                                type="number" 
                                id="price" 
                                placeholder="Ingrese el precio del Producto." 
                                value={productData.price}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="description">Descripción del producto:</label>
                            <input 
                                type="text" 
                                id="description" 
                                placeholder="Ingrese la descripción del Producto." 
                                value={productData.description}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="type">Tipo de producto:</label>
                            <input 
                                type="text" 
                                id="type" 
                                placeholder="Ingrese el tipo de Producto." 
                                value={productData.type}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="categoria_id">ID de Categoría:</label>
                            <input 
                                type="number" 
                                id="categoria_id" 
                                placeholder="Ingrese el ID de la Categoría." 
                                value={productData.categoria_id}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="type_product_id">ID de Tipo de Producto:</label>
                            <input 
                                type="number" 
                                id="type_product_id" 
                                placeholder="Ingrese el ID del Tipo de Producto." 
                                value={productData.type_product_id}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <button type="submit">Agregar Producto</button>
                    </form>
                </div>

                <div className="formulario">
                    <h2>Editar Producto</h2>
                    <form onSubmit={(event) => handleFormSubmit(event, true)}>
                        <div>
                            <label htmlFor="id">ID del producto:</label>
                            <input 
                                type="number" 
                                id="id" 
                                placeholder="Ingrese el ID del Producto." 
                                value={productData.id}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="label-form">Nombre del producto:</label>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="Ingrese el nombre del Producto." 
                                value={productData.name}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="price">Precio del producto:</label>
                            <input 
                                type="number" 
                                id="price" 
                                placeholder="Ingrese el precio del Producto." 
                                value={productData.price}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="description">Descripción del producto:</label>
                            <input 
                                type="text" 
                                id="description" 
                                placeholder="Ingrese la descripción del Producto." 
                                value={productData.description}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="type">Tipo de producto:</label>
                            <input 
                                type="text" 
                                id="type" 
                                placeholder="Ingrese el tipo de Producto." 
                                value={productData.type}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="categoria_id">ID de Categoría:</label>
                            <input 
                                type="number" 
                                id="categoria_id" 
                                placeholder="Ingrese el ID de la Categoría." 
                                value={productData.categoria_id}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="type_product_id">ID de Tipo de Producto:</label>
                            <input 
                                type="number" 
                                id="type_product_id" 
                                placeholder="Ingrese el ID del Tipo de Producto." 
                                value={productData.type_product_id}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <button type="submit">Editar Producto</button>
                    </form>
                </div>

                <div className="formulario">
                    <h2>Eliminar Producto</h2>
                    <form onSubmit={handleDelete}>
                        <div>
                            <label htmlFor="id">ID del producto:</label>
                            <input 
                                type="number" 
                                id="id" 
                                placeholder="Ingrese el ID del Producto." 
                                value={productData.id}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <button type="submit">Eliminar Producto</button>
                    </form>
                </div>
            </div>

            <div className="productos">
                <h2>Lista de Productos</h2>
                {loading ? (
                    <p>Cargando productos...</p>
                ) : (
                    <ul>
                        {productos.map((producto) => (
                            <li key={producto.id}>
                                {producto.name} - ${producto.price} - {producto.description}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default AgregarProductos;
