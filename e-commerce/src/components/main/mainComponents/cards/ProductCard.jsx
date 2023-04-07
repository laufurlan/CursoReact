import { Link } from "react-router-dom";
function ProductCard(product) {
  return (
    <div key={product.id}>
      <div>
            <img src={product.img} alt={product.title} />
          </div>
            <div>
              <h5>{product.title}</h5>
              <p>Categoría:{product.category}</p>
              <p>
                <small>${product.price}</small>
              </p>
              <p>
                <small>Stock:{product.stock}</small>
              </p>
            </div>
            <div>
            <Link to={`/detalle/${product.id}`}>
              <button>Ver más </button>
            </Link>
            </div>
          </div>
  );
}

export default ProductCard;
