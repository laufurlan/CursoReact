import ProductCard from "./ProductCard"

const ProductCardList = ({ products }) => {
    return (
        <div >
            { products.map( product =>  <ProductCard product={product} /> ) 
            }
        </div>
    )
}

export default ProductCardList
