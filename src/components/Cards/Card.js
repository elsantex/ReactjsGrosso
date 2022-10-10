import "./Card.css"

const Card = ({name, image, quote}) => {
    return(
      <div className="card">
          <img className="personaje" alt={`el personaje es ${name}`} src={image} />
          <div className="description-container">
          <h3>{name}</h3>
          <p>{quote}</p>
          </div>
      </div>
    )
  }

  export default Card