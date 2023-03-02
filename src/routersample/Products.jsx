import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { favoritesContext } from '../contexts/favoritesContext';

function Products() {

    const [products, setproducts] = useState([]);

    const { favorites, setfavorites } = useContext(favoritesContext)

    let navigate = useNavigate();

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
            })

    }, [])

    const addToFavorites = (item) => {

        setfavorites([...favorites, item]);

    }

    return (<>
        <table className='w3-table-all w3-card-4'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Detail</th>
                    <th>Add to favorites</th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td><Link to={'/products/' + item.id}>{item.name}</Link></td>
                            <td>{item.unitPrice}</td>
                            <td><button onClick={() => navigate('/products/' + item.id)}>Go to Detail</button></td>
                            <td><button onClick={() => addToFavorites(item)}>Add to favorites</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default Products