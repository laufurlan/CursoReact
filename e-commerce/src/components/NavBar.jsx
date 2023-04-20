import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
//import { Logo } from "../../public/img/Logo.svg"


function NavBar () {

  const { productsInCart } = useContext(CartContext);
  
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-danger">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand">
                    <img className="imgLogo" src="../img/Logo.svg" alt="avocado"  />
                </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">Productos</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">Sobre Nosotros</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-row-reverse">
          <div className="p-2">  
            <Link to="/cart" className="ml-2">
              <CartWidget />
            </Link>
          </div>
          <div className="p-2" style={{ color: "white" }}>
            {productsInCart()}
          </div>  
        </div>
      </nav>
    </div>
  );
};

export default NavBar;










