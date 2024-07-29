import { useState, useEffect } from 'react';

export const useCarritoComprasLogic = () => {
    const [cartItems, setCartItems] = useState([]);
    const [orderData, setOrderData] = useState({
        created_by: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',
        total: 0,
        status: 'Pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        updated_by: 'Usuario1',
        quantity: 1 // Asumiendo que quieres manejar la cantidad
    });

    useEffect(() => {
        // Aquí podrías recuperar los elementos del carrito desde una API o localStorage
        // Ejemplo:
        // fetch('http://localhost:3001/api/cart')
        //     .then(response => response.json())
        //     .then(data => setCartItems(data))
        //     .catch(error => console.error('Error fetching cart items:', error));

        // Simulación de datos del carrito
        setCartItems([
            { id: 1, name: 'Producto 1', price: 29.99, image: '/path/to/image1.jpg' },
            { id: 2, name: 'Producto 2', price: 49.99, image: '/path/to/image2.jpg' }
        ]);
    }, []);

    useEffect(() => {
        // Calcular el total del carrito cuando cambien los elementos del carrito
        const total = cartItems.reduce((sum, item) => sum + item.price, 0);
        setOrderData(prevData => ({ ...prevData, total }));
    }, [cartItems]);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setOrderData({
            ...orderData,
            [id]: value
        });
    };

    const handleConfirmOrder = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/ProductOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });
            const result = await response.json();
            if (response.ok) {
                console.log('Pedido confirmado:', result);
                return true; // Indica éxito
            } else {
                console.error('Error al confirmar pedido:', result);
                return false; // Indica error
            }
        } catch (error) {
            console.error('Error en la solicitud:', error.message);
            return false; // Indica error
        }
    };

    return { cartItems, orderData, handleInputChange, handleConfirmOrder };
};
