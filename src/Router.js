import App from "./App"
import Character from "./components/ItemListContainer/Item"
import Navbar from "./components/navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"


const Router = () =>{
    return (
        <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/category/:cat" element={<App/>}/>
                <Route path="/character/:idCharacter" element={<Character />}/>
                <Route path="/*" element={<div className="error">404 Not Found</div>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default Router