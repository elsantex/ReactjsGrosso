import { Link } from "react-router-dom"
import "./ItemListContainer.css" 

const ItemListContainer = ({id, name, image, quote, category}) => {
    return(
      <div className="ItemListContainer">
        <Link to={`character/${id}`}>
          <img className="personaje" alt={`el personaje es ${name}`} src={image} />
          <div className="description-container">
          <h3>{name}</h3>
          <p>{`# ${id}`}</p>
          <p>{quote}</p>
          <p>{category}</p>
          </div>
        </Link>
      </div>
    )
  }

  export default ItemListContainer