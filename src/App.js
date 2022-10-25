import { useState, useEffect } from "react";
import productos from "./APIrest/simpsonsApi";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/navbar/Navbar";
import "./App.css"
import { useParams } from "react-router-dom";


function App() {

const [filter, setFilter] = useState("");
const [item, setItem] = useState([])
const {cat} = useParams()

  const getImages = () =>{
    setTimeout(() => {
      const item = productos
      setItem(item)
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


      <h1>Bienvenido a Coding</h1>

      <input id="filter"
       name="filter"
        type="text"
         value={filter}
      onChange={(event) => setFilter(event.target.value)}
      />

        <div className="cards_container">
          {cat ?          
          item
          .filter((articulo) => articulo.item.toLowerCase().includes(filter))
          .filter((articulo) => articulo.category === cat)
          .map((item, i) => (  
            <ItemListContainer key = {i}
            id = {item.id}
              name = {item.item}
              image = {item.image}
              description2 = {item.description2}
              description = {item.description}
              precio = {item.precio}
            />
          ))
            :
            item
            .filter((articulo) => articulo.item.toLowerCase().includes(filter))
            .map((item, i) => (  
              <ItemListContainer key = {i}
                id = {item.id}
                name = {item.item}
                image = {item.image}
                description2 = {item.description2}
                description = {item.description}
                precio = {item.precio}
              />
            ))
          }
      </div>
    </div>     
  </div>
  );
}

export default App;
