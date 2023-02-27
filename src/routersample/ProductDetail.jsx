import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDetail() {

    const [detail, setdetail] = useState({})
    const [loading, setloading] = useState(true);
    let { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {

        axios.get(`https://northwind.vercel.app/api/products/${id}`)
            .then(res => {
                setdetail(res.data);
                setloading(false)
            })
            .catch(err => {
                navigate('/products')
            })

    }, []);


    const goToBack = () => {
        navigate(-1);
    }


    return (<>

        {
            loading ? <h1>loading..</h1> : <>
                <p style={{cursor:'pointer'}} onClick={() => goToBack()}>Go to Back!</p>
                <h1>Id: {detail.id} </h1>
                <h1>Name: {detail.name}</h1>
                <h1>Stock: {detail.unitsInStock}</h1>
                <h1>Quantity Per Unit: {detail.quantityPerUnit} </h1>
                <h1>Category Id: {detail.categoryId}  </h1>
            </>
        }
    </>
    )
}

export default ProductDetail