import Button from "../atoms/Button";
import "../pages/CatalogoProductos.css";
import {useNavigate} from 'react-router-dom';
import Card from "../organismos/Card";

function CatalogoProductos(){

    const navigate6 = useNavigate();
    const enterProduc =() =>{
        navigate6('/CatalogoPantalones');
    }

    return(
        <div className="catalogo-container">
            <h2 className="catalogo-titulo">Catálogo de Playeras</h2>
            <div className="Cards-ordenadas">
                <Card 
                    src="Playeras.jpeg" 
                    Titulo={"Playera Formal"} 
                    descripcion={"."} 
                    Precio={"$40.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                    onClick={enterProduc}
                />
                <Card 
                    src="Playerass.jpg" 
                    Titulo={"Playera Casual"} 
                    descripcion={""} 
                    Precio={"$35.00"} 
                    text={"Comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                <Card 
                    src="Playerasss.jpeg" 
                    Titulo={"Playera"} 
                    descripcion={""} 
                    Precio={"$50.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                <Card 
                    src="Playerassss.jpeg" 
                    Titulo={"Playeras Casual"} 
                    descripcion={""} 
                    Precio={"$30.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                <Card 
                    src="Playerasssss.jpeg" 
                    Titulo={"Playera casual"} 
                    descripcion={"."} 
                    Precio={"$45.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                <Card 
                    src="Playerassssss.jpeg" 
                    Titulo={"Playera Formal"} 
                    descripcion={""} 
                    Precio={"$38.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                <Card 
                    src="Playeron.jpeg" 
                    Titulo={"Playera Formal"} 
                    descripcion={""} 
                    Precio={"$50.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                 <Card 
                    src="Playeronnnnnn.jpeg" 
                    Titulo={"Playera Formal"} 
                    descripcion={""} 
                    Precio={"$40.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                 <Card 
                    src="Playeronn.jpeg" 
                    Titulo={"Playera Formal"} 
                    descripcion={""} 
                    Precio={"$40.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                 <Card 
                    src="Playeronnn.jpeg" 
                    Titulo={"Playera"} 
                    descripcion={""} 
                    Precio={"$40.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                <Card 
                    src="Playeronnnn.jpeg" 
                    Titulo={"Formal"} 
                    descripcion={""} 
                    Precio={"$40.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                <Card 
                    src="Playeronnnnn.jpeg" 
                    Titulo={"Playera Formal"} 
                    descripcion={""} 
                    Precio={"$40.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
            </div>
        </div>
    )
}

export default CatalogoProductos;
