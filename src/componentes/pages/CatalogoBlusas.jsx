import React from 'react';
import useFetchProductsByType from '../../hooks/catalago';
import Card from '../organismos/Card';
import "../pages/CatalogoBlusas.css";

const CatalogoBlusas = () => {
    // Aquí debes pasar el ID adecuado para el tipo de producto "Blusas"
    const { products, loading, error } = useFetchProductsByType(3); // 4 es un ejemplo, reemplázalo con el ID real

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="catalogo-container">
            <h2 className="catalogo-titulo">Catálogo de Blusas</h2>
            <div className="Cards-ordenadas">
                {products.map(product => (
                    <Card 
                        key={product.Product_id}
                        src={product.image} // Suponiendo que tienes una propiedad `image` en tus productos
                        Titulo={product.name}
                        descripcion={product.description}
                        Precio={`$${product.price}`}
                        text={"comprar"}
                        className="card"
                        isNewArrival={true}
                        redirectTo={`/producto/${product.Product_id}`} // Ruta para detalles del producto
                    />
                ))}
            </div>
        </div>
    );
};

export default CatalogoBlusas;
