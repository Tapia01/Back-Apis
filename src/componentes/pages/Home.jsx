import React from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';
import Card from '../organismos/Card';
import useProducts from '../../hooks/Home'; // Ajusta la ruta según la estructura de tu proyecto
import { useNavigate } from 'react-router-dom';

function Home() {
    const { products, loading, error } = useProducts();
    const navigate = useNavigate();

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error al cargar productos: {error.message}</p>;

    const handleCardButtonClick = (productId) => {
        navigate(`/ProductosMan/${productId}`);
    };

    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>PCOStore</title>
            </Helmet>
            <div>
                <header>
                    <div className="top-bar">
                        <div className="logo">PCOStore</div>
                        <div className="search-bar">
                            <input type="text" placeholder="Buscar" />
                        </div>
                        <div className="user-options">
                            <button>Iniciar sesión</button>
                            <button className="cart-icon">🛒</button>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Todo</a></li>
                            <li><a href="#">Mujer</a></li>
                            <li><a href="#">Hombre</a></li>
                        </ul>
                    </nav>
                </header>
                <div className="cards-background">
                    <div className="cards-container">
                        {products.map(product => (
                            <Card 
                                key={product.Product_id}
                                src={product.imageUrl || "./default-image.jpg"} // Usa una imagen por defecto si no hay imagen del producto
                                descripcion={product.description} 
                                Precio={`$${product.price}`} 
                                text={"Comprar"} 
                                Titulo={product.name} 
                                className={"card"} 
                                onButtonClick={() => handleCardButtonClick(product.Product_id)} // Pasa la función de manejo de clic
                            />
                        ))}
                    </div>
                </div>
                <main>
                    <section className="categories">
                        {/* Aquí puedes añadir contenido adicional si es necesario */}
                    </section>
                </main>
                <footer>
                    {/* Aquí puedes añadir el contenido del pie de página */}
                </footer>
            </div>
        </>
    );
}

export default Home;
