import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import { addDoc, collection, Timestamp, writeBatch, getDocs, query, where, documentId } from "firebase/firestore/lite";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";


export const Checkout = () => {

  const { cart, totalAmount, emptyCart } = useContext(CartContext);

  const [ orderId, setOrderId ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const [values, setValues] = useState({  
    nombre: "",
    email: "",
    telefono: ""
});

  const handleInputChange = (e) => {

    setValues({
      ...values,
      [e.target.name]: e.target.value

    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    const order = {
      buyer: values,
      items: cart,
      total: totalAmount(),
      date: Timestamp.fromDate(new Date())
    }


  const batch = writeBatch(db);
  const ordersRef = collection(db, "orders")
  const productosRef = collection(db, "products")
  const q = query(productosRef, where(documentId(), 'in', cart.map(product => product.id)))
  
  const outOfStock = []

  setLoading(true)
  getDocs(q)
   .then((res) => {
        res.docs.forEach((doc) => {
          const itemInCart = cart.find((item) => item.id === doc.id)

          if (doc.data().stock >= itemInCart.cantidad) {
            batch.update(doc.ref, {
              stock: doc.data().stock - itemInCart.cantidad
            })

          } else {
            outOfStock.push(itemInCart)
          }
        })

        if (outOfStock.length === 0) {
          addDoc(ordersRef, order)
          .then((res) => {
            batch.commit()
            setOrderId(res.id)
            emptyCart()
            setLoading(false)
          })
          } else {
          alert(`No hay suficiente stock para los siguientes productos: ${outOfStock.map(item => item.title).join(', ')}`)
          setLoading(false)
        }
      })
  }


      
  if (loading) {
    return (
      <div className="text-center">
        <h1>Procesando pedido...</h1>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container my-5">

      {
         orderId
         ? <>
            <h1>Compra realizada!</h1>
            <hr/>
            <p>Numero de order: {orderId}</p>
            <Link to="/" className="btn btn-primary my-2">Volver</Link>
         </>
          : <>
      <h2>Checkout</h2>
      <hr/>
      <form onSubmit={handleSubmit}>
        <input
        name="nombre"
        onChange={handleInputChange}
        value = {values.nombre}
        className="form-control my-2"
        type="text"
        placeholder="Nombre"
        />
        <input
        name="email"
        onChange={handleInputChange}
        value = {values.email}
        className="form-control my-2"
        type="email"
        placeholder="Email"
        />
        <input  
        name="telefono"
        onChange={handleInputChange}
        value = {values.telefono}
        className="form-control my-2"
        type="number"
        placeholder="Telefono"
        />
      <button type="submit" className="btn btn success">Enviar</button>
      </form>
      </>
      }
    </div>
  );
};
