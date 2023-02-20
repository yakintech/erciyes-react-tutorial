import React, { useState } from 'react'
import { categories } from '../data/categories'

function CategoryTable() {

    const [categoryList, setcategoryList] = useState(categories);
    const [isAsc, setIsAsc] = useState(true);
    const [name, setname] = useState('')

    const deleteCategory = (id) => {
        let filteredCategories = categoryList.filter(q => q.id != id);
        setcategoryList([...filteredCategories])
    }

    const sortByName = () => {

        if (isAsc) {
            let sortedCategories = categoryList.sort((a, b) => a.name.localeCompare(b.name));
            setcategoryList([...sortedCategories]);

        }
        else {
            let sortedCategories = categoryList.sort((a, b) => b.name.localeCompare(a.name));
            setcategoryList([...sortedCategories]);
        }
        setIsAsc(!isAsc);

    }

    const search = (value) => {

        let filteredCategories = categories.filter(q => q.name.toLowerCase().includes(value.toLowerCase()));
        setcategoryList([...filteredCategories])

    }

    return (<>
    <div>
        <label>Search by Name</label>
        <input type='text' onChange={(e) => search(e.target.value)} />
    </div>
        <h1>Categories Length: {categoryList.length}</h1>
        <table className='w3-table w3-striped w3-border'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th style={{ cursor: 'pointer' }} onClick={() => sortByName()}>Name</th>
                    <th>Description</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    categoryList.map(item => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td><button onClick={() => deleteCategory(item.id)} className='w3-button w3-red'>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>

        </table>
        <button onClick={() => setcategoryList([])}>Delete All</button>

    </>)
}

export default CategoryTable