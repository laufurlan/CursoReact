import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { Cart } from '../components/Cart'


const CartContainer = () => {

    const {cart, emptyCart, totalAmount} = useContext(CartContext)

    if (cart.length === 0) {
        return <div className="container my-5">
                    <h2>Carrito Vacio</h2>
                    <hr/>
                    <Link to="/products" className="btn btn-primary">Volver</Link>
                </div>
    }

    return (
        <div className="container my-5">
            <h2>Carrito</h2>
            <hr/>
            <br/>
            <div class="row">
                <div class="col-6">
                    <div class="shopping-cart-header">
                        <h6>Producto</h6>
                    </div>
                </div>
                <div class="col-1">
                    <div class="shopping-cart-header">
                        <h6 class="text-truncate">Precio</h6>
                    </div>
                </div>
                <div class="col-3">
                    <div class="shopping-cart-header">
                        <h6>Cantidad</h6>
                    </div>
                </div>
            </div>
            <div className="cart-container">
                {
                    cart.map((prod) => <Cart key={prod.id} {...prod}/>)
                }
            </div>
            <br/>
            <hr/>
            <br/>
            <div className="cart-total">
                <h4>Total: $ {totalAmount()} </h4>
            </div>
            <br/>
            <div>
                <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
                <Link to="/checkout" className="btn btn-success mx-2">Terminar mi comprar</Link>
                <Link to="/products" className="btn btn-primary">Seguir Comprando</Link>
            </div>
        </div>
    )
}

export default CartContainer
