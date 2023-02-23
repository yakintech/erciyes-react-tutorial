import axios from 'axios'
import React, { useEffect, useState } from 'react'

//https://jsonplaceholder.typicode.com/ linkten todo ları çekip title kısmını ul li içerisinde göster
function TodoList() {

    const [todos, settodos] = useState([]);

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                settodos(res.data);
            })

    }, [])

    return (<>
    <ul>
        {
            todos.map(item => <li key={item.id}>{item.title}</li>)
        }
    </ul>
    </>)
}

export default TodoList