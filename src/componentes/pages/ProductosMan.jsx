import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Label from '../atoms/Label';
import Button from '../atoms/Button';
import '../pages/ProductosMan.css';
import { useAddToCartLogic } from '../../hooks/Tallas';

function ProductosMan() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { handleAddToCart, error } = useAddToCartLogic();

    const [selectedColor, setSelectedColor] = useState('rojo');
    const [selectedTalla, setSelectedTalla] = useState('xs');
    const [validId, setValidId] = useState(false);

    useEffect(() => {
        if (id) {
            console.log('ID del producto recibido:', id);
            const productId = parseInt(id, 10);
            setValidId(!isNaN(productId) && productId > 0);
        } else {
            console.log('ID del producto no disponible');
            setValidId(false);
        }
    }, [id]);

    const handleAddAndNavigate = async () => {
        if (!validId) {
            console.error('ID de producto no disponible o inválido');
            return;
        }

        try {
            const productId = parseInt(id, 10);
            if (isNaN(productId)) {
                throw new Error('ID de producto inválido');
            }

            await handleAddToCart(productId, selectedColor, selectedTalla);
            navigate('/CarritoCompras');
        } catch (error) {
            console.error('Error al agregar al carrito:', error);
        }
    };

    return (
        <div className="all-man">
            <div className="rigth-man">
                <div className="tallaman">
                    <Label text="Talla" className="label-info" />
                    <select
                        className="input-form"
                        value={selectedTalla}
                        onChange={(e) => setSelectedTalla(e.target.value)}
                    >
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                </div>
                <div className='colorman'>
                    <Label text="Color" className="label-info" />
                    <select
                        className="input-form"
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                    >
                        <option value="rojo">Rojo</option>
                        <option value="azul">Azul</option>
                        <option value="verde">Verde</option>
                        <option value="negro">Negro</option>
                        <option value="blanco">Blanco</option>
                    </select>
                </div>
                <div className='btn-confirm'>
                    <Button text="Añadir" onClick={handleAddAndNavigate} className="button-style" />
                </div>
            </div>
            <div className="left-man">
                <img src="/Camisa.jpg" id='ropaimg' alt="Camisa" />
            </div>
            {error && <div>Error: {error}</div>}
        </div>
    );
}

export default ProductosMan;
