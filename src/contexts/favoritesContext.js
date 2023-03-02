import { createContext, useState } from "react";

export const favoritesContext = createContext(null);


export const FavoritesProvider = ({ children }) => {

    const [favorites, setfavorites] = useState([]);
   

    let exportValues = {
        favorites, setfavorites
    }

    return <favoritesContext.Provider value={exportValues}>{children}</favoritesContext.Provider>


}