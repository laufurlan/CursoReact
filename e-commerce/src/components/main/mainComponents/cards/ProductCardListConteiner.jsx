import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pFetch } from "../../../../utils/pFetch"
import ProductCardList from "./ProductCardList"




export const ProductCardListContainer = ( {saludos}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading ] = useState(true)
    const { idCategory } = useParams()
     
    useEffect(()=>{
        if (idCategory) {
            pFetch()
            .then(resp => setProducts(resp.filter(products=> products.category === idCategory)))
            .catch( err => console.log(err))
            .finally( ()=> setLoading(false))            
            
        } else {
            pFetch()
            .then(resp => setProducts(resp))
            .catch( err => console.log(err))
            .finally( ()=> setLoading(false))            
        }
        
    }, [idCategory])
    
    return (
        <>
            { loading ? 
                    <h2>Cargando ...</h2>
                : 
                    <>
                        <h2>{saludos}</h2>
                        <ProductCardList products={products}/>
                    </>
            }
        </>
    )
}
