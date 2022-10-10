import simpsonsApi from "./APIrest/simpsonsApi";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/navbar/Navbar";
import "./App.css"


function App() {
  return (
  <div>
    <header>
      <Navbar/>
    </header>
    <div className="principal_container">

      <h1>Characters</h1>
        <div className="cards_container">
          {simpsonsApi.map((character, i) => (  
            <ItemListContainer key = {i}
              name = {character.character}
              image = {character.image}
              quote = {character.quote}
            />
          ))}
      </div>
    </div>
  </div>
  );
}

export default App;
