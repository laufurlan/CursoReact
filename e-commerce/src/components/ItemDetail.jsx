import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";




function ItemDetail({ product })  {
  
  const [ isAdded, setIsAdded ] = useState(false);

  const { addToCart, isInCart, editCount } = useContext(CartContext);
  
  
  const handleAddToCart = (cantidad) => {
    setIsAdded(cantidad);
  }  

  const handleBuy = () => {
    if(!isInCart(product.id)){
      addToCart({...product, cantidad: isAdded})
    }else{
      editCount(product.id, isAdded)
    }
  }



  return(
    <div className="item-detail">
      <div className="container">
          <div className="row">
            <div className="card col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <br/>
                  <img src={product.img} className="img-fluid" alt={product.title} />
                  <br/>
                  <div className="card-description">
                    <br/>
                    <p className="card-text">{product.category}</p>
                    <br/>
                    <p className="card-text">{product.description}</p>
                  </div>
                  <div className="card-price">
                    <span>Price: $</span> {product.price}
                  </div>
                  <br/>
                  
                  <br/>
                  { !isAdded ?
                  <ItemCount
                    handleAdd = {(cantidad) => handleAddToCart(cantidad)} 
                  /> :
                  <Link to="/cart">
                    <button
                      className="btn btn-success"
                      onClick={handleBuy}
                    >
                    Comprar
                    </button>
                  </Link> 
                  }
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ItemDetail;





