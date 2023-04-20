import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


export const Cart = (product) => {

    const { removeFromCart } = useContext(CartContext);

    return (
        <div class="row">
            <div class="col-6">
                <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <h6 class="shopping-cart-item-title text-truncate ml-3 mb-0">{product.title}</h6>
                </div>
            </div>
            <div class="col-2">
                <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <p class="item-price mb-0">${product.price}</p>
                </div>
            </div>
            <div class="col-2">
                <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                    <span>{product.cantidad}</span>
                </div>
            </div>
            <div class="col-2">
                    <button className='btn btn-danger' onClick={() => removeFromCart(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

