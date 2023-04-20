import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
          <div className="col">
            <div className="card">
                <img style={{width: 250, height: 250, alignSelf: "center"}} src={product.img} className="img-thumbnai" alt={product.title}/>            
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link to= {`/product/${product.id}`}>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Ver detalles</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  );
}

export default Item;


