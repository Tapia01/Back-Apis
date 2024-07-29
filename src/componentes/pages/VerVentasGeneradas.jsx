import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VerVentasGeneradas.css'; // Asegúrate de que la ruta del archivo CSS sea correcta

function VerVentasGeneradas() {
    const navigate = useNavigate();
    const goToInicio = () => {
        navigate("/inicio");
    }

    return (
        <div className="container">
            <header>
                <h1>Ventas Generadas</h1>
                <a href="/BienvenidoPaco" className="btn-regresar">Inicio</a> {/* Enlace para regresar al inicio */}
            </header>
            <section className="sales">
                <table className="sales-table">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>15 de julio de 2024</td>
                            <td>Camiseta Azul</td>
                            <td>3 unidades</td>
                            <td>$150.00</td>
                        </tr>
                        <tr>
                            <td>14 de julio de 2024</td>
                            <td>Pantalón Negro</td>
                            <td>2 unidades</td>
                            <td>$120.00</td>
                        </tr>
                        {/* Agregar más filas según sea necesario */}
                    </tbody>
                </table>
            </section>
            <section className="chart">
                <h2>Gráfico de Ventas</h2>
                <div className="chart-image">
                    <img src="Grafica.jpeg" alt="Gráfico de Barras de Ventas" />
                </div>
            </section>
        </div>
    );
}

export default VerVentasGeneradas;
