import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Products() {

    const [products, setproducts] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
            })

    }, [])



    return (<>
        <table className='w3-table-all w3-card-4'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Detail</th>
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
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default Products