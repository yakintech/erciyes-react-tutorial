import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



const addProductValidation = yup.object({
    name: yup.string().required("Name alanı boş geçilemez"),
    unitPrice: yup.string().required("Price alanı boş geçilemez")
})


function AddProduct() {

    let { register, handleSubmit, formState:{ errors }  } = useForm({
        resolver: yupResolver(addProductValidation)
      });

    let navigate = useNavigate();

    const add = (values) => {

    
        axios.post('https://northwind.vercel.app/api/products', values)
            .then(res => {
                navigate('/products')
            })

    }
    
    return (<>
        <form onSubmit={handleSubmit(add)}>
            <div>
                <label>Name: </label>
                <input type='text' {...register('name')} />
                <p style={{color:'tomato'}}>{errors.name?.message}</p>
            </div>

            <div>
                <label>Price: </label>
                <input type='text' {...register('unitPrice')} />
                <p style={{color:'tomato'}}>{errors.unitPrice?.message}</p>

            </div>

            <div>
                <label>Stock: </label>
                <input type='text'  {...register('unitsInStock')} />
            </div>

            <div>
                <label>Quantity Per Unit: </label>
                <input type='text'  {...register('quantityPerUnit')} />
            </div>

            <div>
                <input type='submit' value='Add' />
            </div>

        </form>
    </>)
}

export default AddProduct