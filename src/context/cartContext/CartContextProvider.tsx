'use client'
import React, {useContext, useState} from 'react';


const CartContext = React.createContext({cart:[],handleUpdateCart:(par:any) => {}})

const CartContextProvider = ({children}:any) => {
    const [cart,setCart] = useState<any>([])

    const handleUpdateCart = (item:any) => {
        const findIfExistIndex = cart.findIndex((element:any) => element.id === item.id)
        if(findIfExistIndex >= 0){
            const copiedCart = [...cart]
            copiedCart.splice(findIfExistIndex,1)
            setCart(copiedCart)
            return
        }
        setCart([...cart,item])
    }

    return (
        <CartContext.Provider value={{handleUpdateCart,cart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

export const useCart = () => useContext(CartContext)