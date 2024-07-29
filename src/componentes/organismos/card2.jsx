import React from 'react';
import PropTypes from 'prop-types';
import "../organismos/Card2.css";

const Card2 = ({ src, Titulo, descripcion, Precio, isNewArrival, product, onBuyClick }) => {
    return (
        <div className="card-container">
            <img src={src} alt={Titulo} className="card-image" />
            <h3>{Titulo}</h3>
            <p>{descripcion}</p>
            <p>{Precio}</p>
            <button onClick={() => onBuyClick(product)}>Comprar</button>
        </div>
    );
};

Card2.propTypes = {
    src: PropTypes.string.isRequired,
    Titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    Precio: PropTypes.string.isRequired,
    isNewArrival: PropTypes.bool,
    product: PropTypes.object.isRequired,
    onBuyClick: PropTypes.func.isRequired
};

export default Card2;
