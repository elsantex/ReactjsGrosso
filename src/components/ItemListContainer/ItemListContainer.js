import "./ItemListContainer.css"

const ItemListContainer = ({name, image, quote}) => {
    return(
      <div className="ItemListContainer">
          <img className="personaje" alt={`el personaje es ${name}`} src={image} />
          <div className="description-container">
          <h3>{name}</h3>
          <p>{quote}</p>
          </div>
      </div>
    )
  }

  export default ItemListContainer