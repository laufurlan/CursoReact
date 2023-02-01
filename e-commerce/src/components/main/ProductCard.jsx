import "../../styles/styles_components/ProductCard.css"
import Heart from "../img/Heart.svg"

function ProductCard(props) {
  
  
    return (
      <div className="conteiner">
      <div className="card">
        <h3 className="card-title">{props.title}</h3>
        <img className="fav" src={Heart} alt="heart"/>
        <img clasName="principal-img" src={props.img} alt={props.title} />
        <h3 className="price"> $ {props.price}</h3>
        <button className="button-card">Ver más </button>
      </div>
      </div>
    );
  }
  
  export default ProductCard;