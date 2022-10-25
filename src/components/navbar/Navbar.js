import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"
import { Link } from "react-router-dom"


const Navbar = () =>{
    return(
        <div className="navbar">
            <Link to={"/"}>
            <img className="logoNav" src={require("./logo1.jpg")} alt="Logo de la pagina" />    
             </Link>
             <div className="categories">
                <Link to={"/category/TV"}>TVs</Link>
                <Link to={"/category/Smartphone"}>Smartphones</Link>  
                <Link to={"/category/Electrodomestico"}>Electrodomesticos</Link> 
            </div>
            <div className="cart">
            <CartWidget/>
            </div>
        </div>  
    )
}


export default Navbar