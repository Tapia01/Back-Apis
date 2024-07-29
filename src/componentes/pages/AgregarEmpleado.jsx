import React, { useState } from 'react';
import "../pages/AgregarEmpleado.css";
import Label from "../atoms/Label";
import Button from "../atoms/Button";

const AgregarEmpleado = () => {
    const [employees, setEmployees] = useState([]);
    const [employeeName, setEmployeeName] = useState('');
    const [employeeRole, setEmployeeRole] = useState('');
    const [employeeEmail, setEmployeeEmail] = useState('');
    const [employeePhone, setEmployeePhone] = useState('');

    const agregarEmpleado = () => {
        const newEmployee = {
            name: employeeName,
            role: employeeRole,
            email: employeeEmail,
            phone: employeePhone
        };
        setEmployees([...employees, newEmployee]);
        limpiarCampos();
    };

    const limpiarCampos = () => {
        setEmployeeName('');
        setEmployeeRole('');
        setEmployeeEmail('');
        setEmployeePhone('');
    };

    const editarEmpleado = (index) => {
        const employee = employees[index];
        setEmployeeName(employee.name);
        setEmployeeRole(employee.role);
        setEmployeeEmail(employee.email);
        setEmployeePhone(employee.phone);
        eliminarEmpleado(index);
    };

    const eliminarEmpleado = (index) => {
        const newEmployees = employees.filter((_, i) => i !== index);
        setEmployees(newEmployees);
    };

    return (
        <div className="container">
            <header className="header">
                <h1>PacoStore</h1>
                <a href="/BienvenidoPaco" className="btn-regresar">Inicio</a> {/* Enlace para regresar al inicio */}
            </header>
            <div className="formulario">
                <h2>Agregar Empleado</h2>
                <div>
                    <Label text="Nombre del empleado:" className="label-form" />
                    <input 
                        type="text" 
                        placeholder="Ingrese el nombre del empleado" 
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <Label text="Rol del empleado:" className="label-form" />
                    <input 
                        type="text" 
                        placeholder="Ingrese el rol del empleado" 
                        value={employeeRole}
                        onChange={(e) => setEmployeeRole(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <Label text="Correo electrónico:" className="label-form" />
                    <input 
                        type="email" 
                        placeholder="Ingrese el correo electrónico" 
                        value={employeeEmail}
                        onChange={(e) => setEmployeeEmail(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <Label text="Teléfono:" className="label-form" />
                    <input 
                        type="text" 
                        placeholder="Ingrese el número de teléfono" 
                        value={employeePhone}
                        onChange={(e) => setEmployeePhone(e.target.value)}
                        required 
                    />
                </div>
                <Button text="Agregar Empleado" onClick={agregarEmpleado} className="button-style" />
            </div>

            <div className="tabla">
                <h2>Lista de Empleados</h2>
                <table id="empleadosTabla">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Rol</th>
                            <th>Correo</th>
                            <th>Teléfono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.name}</td>
                                <td>{employee.role}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                                <td>
                                    <Button text="Editar" onClick={() => editarEmpleado(index)} className="button-style" />
                                    <Button text="Eliminar" onClick={() => eliminarEmpleado(index)} className="button-style" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AgregarEmpleado;
