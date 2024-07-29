import React from 'react';
import useFetchProductsByType from '../../hooks/typeRopa';
import Card from '../organismos/Card';
import "../pages/CatalogoBlusas.css";
import { useNavigate } from 'react-router-dom';

const ProductosMan = () => {

    
    // Aquí debes pasar el ID adecuado para el tipo de producto "Blusas"
    const { products, loading, error } = useFetchProductsByType(4); // 4 es un ejemplo, reemplázalo con el ID real
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    

    return (
        <div className="catalogo-container">
            <h2 className="catalogo-titulo">catalogo de hombre</h2>
            <div className="Cards-ordenadas">
                {products.map(product => (
                    <Card 
                        key={product.Product_id}
                        src={product.image} // Suponiendo que tienes una propiedad image en tus productos
                        Titulo={product.name}
                        descripcion={product.description}
                        Precio={`$${product.price}`}         
                         text={"comprar"}
                        className="card"
                        isNewArrival={true}
                        redirectTo="/CarritoCompras" // Asegúrate de que la ruta sea la correcta
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductosMan;