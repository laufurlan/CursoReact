import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom"
import ProductCardList from "./ProductCardList"
import { Loading } from "../../Loading"

export const ProductCardListContainer = () => {
    const [products, setProducts] = useState([])   
    const [loading, setLoading ] = useState(true)      
    const { category } = useParams()    
     

    useEffect(()=>{
        const db = getFirestore()        
        const queryCollection = collection(db, 'products')
        
        const queryFilter = category ? query(queryCollection, where( 'category', '==' , category)) : queryCollection                

        getDocs(queryFilter)
        .then(respCollection => setProducts( respCollection.docs.map(prod => ({ id: prod.id, ...prod.data() })) ))
        .catch(err => console.error(err))
        .finally(()=> setLoading(false))         
    }, [category])
         
    return (
        <>
         
            { loading ?                    
                <Loading />
            : 
                <>                        
                    <ProductCardList products={products}/>
                </>
            }
        </>
    )
}


