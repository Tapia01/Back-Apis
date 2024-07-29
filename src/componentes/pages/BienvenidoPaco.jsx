import Button from "../atoms/Button";
import './BienvenidoPaco.css';
import { useNavigate } from 'react-router-dom';

function BienvenidoPaco() {
    const navigate = useNavigate();
    
    const enterVerVentasGeneradas = () => {
        navigate('/verVentasGeneradas');// Redirige a la interfaz de agregar empleados
    }

    const enterAgregarEmpleado = () => {
        navigate('/AgregarEmpleado'); // Redirige a la interfaz de agregar empleados
    }

    const enterAgregarProducto = () => {
        navigate('/AgregarProducto'); // Redirige a la interfaz de agregar productos
    }

    return (
        <>
            <div className="all-paco">
                <div className="right-paco">
                    <h1 className="Titulo">BIENVENIDO PACO</h1>
                    <Button text="Ver ventas generadas" onClick={enterVerVentasGeneradas}className="button-Style"></Button>
                    <Button text="Agregar Empleado" onClick={enterAgregarEmpleado} className="button-Style"></Button>
                    <Button text="Agregar productos" onClick={enterAgregarProducto} className="button-Style"></Button>
                </div>
                <div className="left-paco">
                    <img src="/store.jpg" alt="Store"></img>
                </div>
            </div>
        </>
    )
}

export default BienvenidoPaco;
