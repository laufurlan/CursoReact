import { useCartContext } from "../../context/CartContext"
import ProductCount from "../ProductCount"
const ProductDetail= ({product}) => {
  
    const { addToCart } = useCartContext()

    function onAdd(amount){
        addToCart( { ...product, amount} )
    }
    
    return (
        <div >
            <div >
                    <div>
                        <img src={product.img} alt={product.title} />
                    </div>
                    <div>
                        <p>Nombre: {product.title}</p>
                        <p>Categoría: {product.category}</p>
                        <p>Precio: {product.price}</p>
                        <p>Stock: {product.stock}</p>
                    </div>
                </div>
                <div>
                    <ProductCount initial={1} stock={10} onAdd={onAdd}/>
                </div>
            </div>

    )
}

  
  export default ProductDetail



   