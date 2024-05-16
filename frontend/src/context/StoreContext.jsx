import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) => {
        if(!cartItems[itemId]) { //if it is added for the first time, in that case we create first entry
            setCartItems((prev)=>({...prev, [itemId]:1})) //will return one object where we wil define itemId and the value will be 1
        }
        else {
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue = {
        food_list, 
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;