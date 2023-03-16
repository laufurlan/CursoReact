import ProductCard from "./ProductCard"

const ProductCardList = ({ products }) => {
    return (
        <div>
            {products.map(product => {
                return <ProductCard key={product.id} product={product} /> 
            })}
        </div>
    )
}

export default ProductCardList
