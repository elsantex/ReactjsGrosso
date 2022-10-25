import { useState, useEffect } from "react";
import simpsonsApi from "./APIrest/simpsonsApi";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/navbar/Navbar";
import "./App.css"
import { useParams } from "react-router-dom";


function App() {

const [filter, setFilter] = useState("");
const [characters, setCharacters] = useState([])
const {cat} = useParams()

  const getImages = () =>{
    setTimeout(() => {
      const characters = simpsonsApi
      setCharacters(characters)
    }, 1000)
  }


useEffect( () => {
getImages()
}, [])

 

  return (
  <div>
    <header>
      <Navbar/>
    </header>
    <div className="principal_container">


      <h1>Characters</h1>

      <input id="filter"
       name="filter"
        type="text"
         value={filter}
      onChange={(event) => setFilter(event.target.value)}
      />

        <div className="cards_container">
          {cat ?          
          characters
          .filter((personaje) => personaje.character.toLowerCase().includes(filter))
          .filter((personaje) => personaje.category === cat)
          .map((character, i) => (  
            <ItemListContainer key = {i}
            id = {character.id}
              name = {character.character}
              image = {character.image}
              quote = {character.quote}
              category = {character.category}
            />
          ))
            :
            characters
            .filter((personaje) => personaje.character.toLowerCase().includes(filter))
            .map((character, i) => (  
              <ItemListContainer key = {i}
                id = {character.id}
                name = {character.character}
                image = {character.image}
                quote = {character.quote}
                category = {character.category}
              />
            ))
          }
      </div>
    </div>     
  </div>
  );
}

export default App;
