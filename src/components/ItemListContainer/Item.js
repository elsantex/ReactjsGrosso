import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../APIrest/simpsonsApi";
import "./ItemListContainer.css"

const ItemDetailsContainer = () => {
  const { idItem } = useParams();
  const [item, setItem] = useState({});
  const [contador, setContador] = useState(1)
  const handleRestar = () =>{
    setContador(contador - 1)
  }
  const handleSumar = () =>{
    setContador(contador + 1)
  }

  useEffect(() => {
    setItem(getItemById(idItem));
  }, []);

  return <div className="item-container">
     <div className="item">
   
     <img className="personaje" src={item.image} alt={`el articulo es ${item.item}`} />
    <div className="item-description">
     <h3>{item.item}</h3>
    <p> {item.description}</p>
    <p>{item.description2}</p>
    <h4>Precio: ${item.precio}</h4>
    </div>
    </div>
    <div className="agregar-cantidad"> 
    <button className="masmenos" disabled = {contador === 1 ? true : false} onClick={handleRestar}> - </button>
    <p>{contador}</p>
    <button className="masmenos" onClick={handleSumar}> + </button>
    </div>
    </div>;
};

export default ItemDetailsContainer;