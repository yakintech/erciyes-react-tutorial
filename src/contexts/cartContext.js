import { createContext, useState } from "react";


export const cartContext = createContext(null);


export const CartProvider = ({children}) => {

    const [cart, setcart] = useState([]);

    const values = {
        cart,setcart
    }

    return <cartContext.Provider value={values}>{children}</cartContext.Provider>

}