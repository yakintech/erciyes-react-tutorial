import React, { useContext } from 'react'
import { favoritesContext } from '../contexts/favoritesContext'

function Favorites() {

    let { favorites, setfavorites } = useContext(favoritesContext);

    const removeFavorites = (id) => {
        let filteredFavorites = favorites.filter(q => q.id != id);
        setfavorites([...filteredFavorites])
    }

    return (<>
        <button onClick={() => setfavorites([])}>Clear All</button>
        <ul>
            {
                favorites && favorites.map(item =>
                    <>
                        <li key={item.id}>{item.name}</li>
                        <button onClick={() => removeFavorites(item.id)}>Remove</button>
                    </>

                )
            }
        </ul>
    </>
    )
}

export default Favorites