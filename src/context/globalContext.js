import { cloneDeep } from 'lodash';
import React from 'react';

export const AppContext = React.createContext(null);

export const AppProvider = ({children}) => {
    const [cart, setCart] = React.useState([]);

    const addItemToCart = (item) => {
        setCart([...cart, item]);
    }

    const removeItemFromCart = (item) => {
        const itemIndex = cart.findIndex((i) => i.id_modelo === item.id_modelo);
        const newCart = cloneDeep(cart);
        newCart.splice(itemIndex, 1);
        setCart(newCart);
    }

    const isInCart = (item) => {
        return cart.some((i) => i.id_modelo === item.id_modelo);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <AppContext.Provider value={{cart, addItemToCart, removeItemFromCart, isInCart, clearCart}}>
            {children}
        </AppContext.Provider>
    )
}