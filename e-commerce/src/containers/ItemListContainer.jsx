import React, { useEffect, useState } from 'react'
//import { getItems } from '../services/getItems'   
import ItemList from '../components/ItemList';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase/config';


const ItemListContainer = () => {
  
  const [loading, setLoading] = useState(false);
  const [products, setItems] = useState([]);

  useEffect( ()=> {

    setLoading(true);

    const productosRef = collection(db, 'products');

    getDocs(productosRef)
      .then( (snapshot) => {
        const productos = snapshot.docs.map( (doc) => ({
          id : doc.id,
          ...doc.data()       
        }) 
        )
        setItems(productos);
      })
      .finally( () => {
        setLoading(false);
      })
  }, []);

  return (
      <>
      {loading ? <div>Loading...</div> : <ItemList products={products} />}
      </>
  )
}

export default ItemListContainer;

