import { useState, useEffect } from 'react';

export const useAgregarProducto = () => {
    const [productData, setProductData] = useState({
        id: '',
        name: '',
        price: '',
        description: '',
        type: '',
        categoria_id: '',
        type_product_id: '',
        created_by: 'Usuario1',
        updated_by: 'Usuario1'
    });
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/Productos');
                const result = await response.json();
                if (response.ok) {
                    setProductos(result);
                } else {
                    console.error('Error al obtener productos:', result);
                }
            } catch (error) {
                console.error('Error en la solicitud de productos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setProductData({
            ...productData,
            [id]: value
        });
    };

    const handleFormSubmit = async (event, isEdit = false) => {
        event.preventDefault();
        const url = isEdit 
            ? `http://localhost:3001/api/Productos/${productData.id}` 
            : 'http://localhost:3001/api/Productos';
        const method = isEdit ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });
            const result = await response.json();
            if (response.ok) {
                console.log(isEdit ? 'Producto editado:' : 'Producto agregado:', result);
                setProductos((prevProductos) => {
                    if (isEdit) {
                        return prevProductos.map((prod) =>
                            prod.id === result.id ? result : prod
                        );
                    } else {
                        return [...prevProductos, result];
                    }
                });
            } else {
                console.error(isEdit ? 'Error al editar producto:' : 'Error al agregar producto:', result);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error.message);
        }
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/api/Productos/${productData.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            if (response.ok) {
                console.log('Producto eliminado:', result);
                setProductos((prevProductos) =>
                    prevProductos.filter((prod) => prod.id !== productData.id)
                );
            } else {
                console.error('Error al eliminar producto:', result);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error.message);
        }
    };

    return { productData, handleInputChange, handleFormSubmit, handleDelete, productos, loading };
};
