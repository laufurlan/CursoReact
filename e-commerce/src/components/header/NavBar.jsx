import Logo from "../img/Logo.svg";
import "../../styles/styles_components/NavBar.css"
import ShoppingCart from "../img/ShoppingCart.svg"


function NavBar() {
    return (
      <nav className="headerbackground">
        <ul className="ul">
          
            <a href="/">
              <img className="imgLogo" src={Logo} alt="avocado"  />
            </a>
          
          <li>
           <button className="lengerie">Lenceria</button>
          </li>
          <li>
           <button className="accesories">Accesorios</button>
          </li>
          <li>
           <button className="about-us">Sobre Nosotros</button>
          </li>
          <li>
           <button className="contact">Contacto</button>
          </li>
        <img className="icon-cart" src={ShoppingCart} alt="shoppingCart"  />
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
