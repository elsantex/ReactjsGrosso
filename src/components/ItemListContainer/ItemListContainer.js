import { Link } from "react-router-dom"
import "./ItemListContainer.css" 

const ItemListContainer = ({id, name, image, description, description2 ,precio}) => {
    return(
      <div className="ItemListContainer">
        <Link to={`/details/${id}`}>
          <img className="personaje" alt={`el personaje es ${name}`} src={image} />
          <div className="description-container">
          <h3>{name}</h3>
          <p>{`# ${id}`}</p>
          <p>{description}</p>
          <p>{description2}</p>
          <h4>{`Precio: $${precio}`}</h4>
          </div>
        </Link>
      </div>
    )
  }

  export default ItemListContainer