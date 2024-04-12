import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        savedCartItems && setCartItems(savedCartItems);
    }, []);

    const addToCart = (item) => {
        const updatedCart = [...cartItems, item];
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
    }

    return(
        <CartContext.Provider value={{cartItems, addToCart, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};