import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartContextProvider = ( {children} ) => {

    const [cart, setCart] = useState([])
    

    const addToCart = (product) => {
        setCart([...cart, product])
        saveCart(cart)
    }  
    
    const editCount = ( id, cantidad) => {
        let nuevoArray = cart.map(item => item.id === id ? {...item, cantidad: cantidad} : item )
        setCart(nuevoArray)
    }

    const emptyCart = () => {
        setCart([])
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(product => product.id !== id))
        saveCart(cart)
    }

    const totalAmount = () => {
        return cart.reduce((acc, product) => acc + product.price * product.cantidad, 0)
    }
    
    const saveCart = () => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
      }

    const productsInCart = (cantidad) => {
        return cart.reduce((acc, product) => acc + product.cantidad, 0)
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
      }
    
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            emptyCart,
            totalAmount,
            removeFromCart,
            saveCart,
            productsInCart,
            editCount,
            isInCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}
