import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../../APIrest/simpsonsApi";
import "./ItemListContainer.css"

const Character = () => {
  const { idCharacter } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    setCharacter(getCharacterById(idCharacter));
  }, []);

  return <div className="item">
   
     <img className="personaje" src={character.image} alt={`el personaje es ${character.character}`} />
    <div className="item-description">
     <h3>{character.character}</h3>
    <p> {character.quote}</p>
    </div>
    </div>;
};

export default Character;