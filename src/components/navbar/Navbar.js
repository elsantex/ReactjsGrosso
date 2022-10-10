import CategoryButton from "../CategoryButton/CategoryButton"
import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"


const Navbar = () =>{
    return(
        <div className="navbar">
            <img className="logoNav" src={require("./logo1.jpg")} alt="Logo de la pagina" />     
             <div className="categories">
                <CategoryButton/>
                <CategoryButton/>   
                <CategoryButton/>
                <CategoryButton/>
            </div>
            <div className="cart">
            <CartWidget/>
            </div>
        </div>  
    )
}


export default Navbar