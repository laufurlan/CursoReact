import { Link } from "react-router-dom";
import "../../../../styles/styles_components/ProductCard.css"

function ProductCard(product) {
  
  
    return (
      <div key={product.id} className="card" >
        <h3 className="card-title">{product.title}</h3>
        <img clasName="principal-img" src={product.img} alt={product.title} />
        <label>Categoría: {product.category}</label>
        <h3 className="price"> $ {product.price}</h3>
       <label>Stock: {product.stock}</label>
       <Link to={`/detalle/${product.id}`}>
       <button className="button-card">Ver más </button>
       </Link>
      </div>

  
    );
  }
  
  export default ProductCard;