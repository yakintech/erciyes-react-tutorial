import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { cartContext } from '../contexts/cartContext';
import { favoritesContext } from '../contexts/favoritesContext';

function Products() {

    const [products, setproducts] = useState([]);

    const { favorites, setfavorites } = useContext(favoritesContext)
    const { cart, setcart } = useContext(cartContext)


    let navigate = useNavigate();

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
            })

    }, [])

    const favoritesOperation = (item) => {

        let favoritesControl = favorites.find(q => q.id == item.id);

        if (favoritesControl) {
            let newFavorites = favorites.filter(q => q.id != item.id);
            setfavorites([...newFavorites]);
        } else {
            setfavorites([...favorites, item]);
        }



    }


    const addToCart = (item) => {


        let cartItem = cart.find(q => q.id == item.id);
        //eğer ürün sepette yoksa ürün sepete miktarı 1 olacak şekilde atılır!

        if (!cartItem) {
            let newCartItem = {
                id: item.id,
                quantity: 1,
                name: item.name,
                unitPrice: item.unitPrice
            }

            setcart([...cart, newCartItem])
        }
        else{
            cartItem.quantity = cartItem.quantity + 1;
            setcart([...cart])
        }

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
                    <th>Add to cart</th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map(item => {

                        let ifFavorites = favorites.find(q => q.id == item.id);

                        return <tr>
                            <td>{item.id}</td>
                            <td><Link to={'/products/' + item.id}>{item.name}</Link></td>
                            <td>{item.unitPrice}</td>
                            <td><button onClick={() => navigate('/products/' + item.id)}>Go to Detail</button></td>
                            <td><button onClick={() => favoritesOperation(item)}>
                                {
                                    ifFavorites ? <>Remove Favorites</> : <>Add to Favorites</>
                                }
                            </button></td>
                            <td><button onClick={() => addToCart(item)}>Add to Cart</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default Products




const cart = [
    {
        id: 1,
        name: 'Iphone',
        price: 44, //birim fiyat bir tanesinin fiyatı
        quantity: 2
    },
    {
        id: 4,
        name: 'samsung',
        price: 14, //birim fiyat bir tanesinin fiyatı
        quantity: 1
    }
]
