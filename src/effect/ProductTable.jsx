//STATE _ PROPS _ EFFECT
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductTable() {

    const [products, setproducts] = useState([]);
    const [name, setname] = useState('');
    const [price, setprice] = useState(0);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        loadProducts();
    }, []);


    const loadProducts = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
                setloading(false)
            })
    }

    const deleteProduct = (id) => {

        axios.delete('https://northwind.vercel.app/api/products/' + id)
            .then(res => {
                loadProducts();
            })

    }


    const add = () => {

        setloading(true);
        
        let newProduct = {
            name: name,
            unitPrice: price
        }

        axios.post('https://northwind.vercel.app/api/products', newProduct)
            .then(res => {
                loadProducts();
            })
    }
    return (<>
        <div>
            <div>
                <label>Name: </label>
                <input type='text' onChange={(e) => setname(e.target.value)} />
            </div>
            <div>
                <label>Price: </label>
                <input type='text' onChange={(e) => setprice(e.target.value)} />
            </div>
            <div>
                <button onClick={add}>Add</button>
            </div>
        </div>


{

    loading ? <h1>loading...</h1> :<table className='w3-table w3-striped w3-border'>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        {
            products && products.map(item => {
                return <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.unitPrice}</td>
                    <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>
                </tr>
            })
        }
    </tbody>
</table>
}

       
    </>)
}

export default ProductTable