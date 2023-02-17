import "../../../styles/styles_components/NavBar.css"
import CardWidget from "./CartWidget";
import Logo from "../../img/Logo.svg"


function NavBar() {
    return (
      <nav className="headerbackground">
        <ul className="ul">
        <div>
        <a href="/">
        <img className="imgLogo" src={Logo} alt="avocado"  />
      </a>
      </div>
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
        <CardWidget/>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
