import { Link } from "react-router-dom";
function ProductCard(product) {
  return (
    <div className="col">
      <div className="card mb-3" style="max-width: 540px;">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="img-fluid rounded-start"
              src={product.img}
              alt={product.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">Categoría: {product.category}</p>
              <p className="card-text">
                <small class="text-muted">$ {product.price}</small>
              </p>
              <p className="card-text">
                <small class="text-muted">Stock: {product.stock}</small>
              </p>
            </div>
            <Link to={`/detalle/${product.id}`}>
              <button>Ver más </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
