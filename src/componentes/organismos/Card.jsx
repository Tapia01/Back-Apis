import React from 'react';

function Card({ src, descripcion, Precio, text, Titulo, className, onButtonClick }) {
    return (
        <div className={className}>
            <img src={src} alt={Titulo} />
            <h3>{Titulo}</h3>
            <p>{descripcion}</p>
            <p>{Precio}</p>
            <button onClick={onButtonClick}>{text}</button>
        </div>
    );
}

export default Card;
