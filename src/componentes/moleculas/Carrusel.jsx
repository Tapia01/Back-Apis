import { useState, useEffect } from "react";

const useCarrusel = (images, intervalTime = 5000) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, intervalTime);

        return () => {
            clearInterval(interval);
        };
    }, [images.length, intervalTime]);

    return currentIndex;
};

export default useCarrusel;