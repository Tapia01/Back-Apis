import React from "react";
import banner from '../../../public/Blusa.jpg';
import banner1 from '../../../public/Camisasss.jpeg';
import banner2 from "../../../public/Blusassss.jpeg"
import useCarrusel from "../moleculas/Carrusel";
import "./CarruselHome.css";

const Carrusel = () => {
    const images = [banner, banner2, banner1];
    const currentIndex = useCarrusel(images);

    return (
        <div className="carrusel">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={index === currentIndex ? "slide active" : "slide"}
                >
                    <img src={image} alt={`Slide ${index + 1}`} />

                </div>
            ))}
        </div>
    );
};

export default Carrusel;