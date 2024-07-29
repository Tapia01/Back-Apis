import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RopaCasualMujer from './componentes/pages/RopaCasualMujer.jsx'
import BienvenidoPaco from './componentes/pages/BienvenidoPaco.jsx'
import ProductosMan from './componentes/pages/ProductosMan.jsx'
import CarritoCompras from './componentes/pages/CarritoCompras.jsx'
import CatalogoProductos from './componentes/pages/CatalogoProductos.jsx'
import CatalogoPantalones from './componentes/pages/CatalogoPantalones.jsx'
import CatalogoCamisas from './componentes/pages/CatalagoCamisas.jsx'
import Home from './componentes/pages/Home.jsx'
import CatalogoBlusas from './componentes/pages/CatalogoBlusas.jsx'
import CatalogoShorts from './componentes/pages/CatalogoShorts.jsx'
import AgregarProductos from './componentes/pages/AgregarProducto.jsx'
import AgregarEmpleado from './componentes/pages/AgregarEmpleado.jsx'
import VerVentasGeneradas from './componentes/pages/VerVentasGeneradas.jsx'
import Delivery from './componentes/pages/Delivery.jsx'
import Checkout from './componentes/pages/checkout.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },

  {
      path: '/Checkout',
      element:<Checkout></Checkout>
  },


  {
    path:'/RopaCasualMujer',
    element:<RopaCasualMujer></RopaCasualMujer>
  },
  {
    path:'/BienvenidoPaco',
    element:<BienvenidoPaco></BienvenidoPaco>
  },

{
  path: '/ProductosMan/:id', // Asegúrate de que la ruta incluye :id
  element: <ProductosMan />,
},
  {
    path:'/CarritoCompras',
    element:<CarritoCompras></CarritoCompras>
  },
  {
    path:'/CatalogoProductos',
    element:<CatalogoProductos></CatalogoProductos>
  },
  {
    path:'/CatalogoPantalones',
    element:<CatalogoPantalones></CatalogoPantalones>
  },
  {
    path: '/CatalogoCamisas'
    , element: <CatalogoCamisas></CatalogoCamisas>
  },
  {
    path: '/Home'
    , element: <Home></Home>
  },
  {
    path: '/CatalogoBlusas'
    , element: <CatalogoBlusas></CatalogoBlusas>
  },
  {
    path: '/CatalogoShorts'
    , element: <CatalogoShorts></CatalogoShorts>
  },
  {
    path: '/AgregarProducto',
    element: <AgregarProductos></AgregarProductos>
  },
  {
    path: '/AgregarEmpleado',
    element: <AgregarEmpleado></AgregarEmpleado>
  },
  {
    path: '/VerVentasGeneradas',
    element: <VerVentasGeneradas></VerVentasGeneradas>
  },
  {
    path:'/Delivery',
    element:<Delivery></Delivery>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
