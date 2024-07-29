import { useState } from 'react';

export const useAddToCartLogic = () => {
    const [error, setError] = useState(null);

    const handleAddToCart = async (productId, color, talla) => {
        if (isNaN(productId)) {
            throw new Error('ID de producto inválido');
        }

        try {
            const response = await fetch('http://localhost:3001/api/ColorTalla/color_tallas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Product_id: productId,
                    Color: color,
                    Talla: talla,
                }),
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.error || 'Error en la solicitud');
            }

            // Manejar éxito aquí, como actualizar el estado global, etc.
        } catch (error) {
            setError(error.message);
            throw error;
        }
    };

    return { handleAddToCart, error };
};
