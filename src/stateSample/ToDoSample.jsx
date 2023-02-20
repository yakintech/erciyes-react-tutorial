import React, { useState } from 'react'

function ToDoSample() {
    const [title, settitle] = useState('');
    const [todos, settodos] = useState([]);

    const addNewTodo = () => {

        let todo = {
            id: Math.floor(Math.random() * 999999),
            title: title,
            isCompleted: false
        }

        settodos([...todos, todo]);
    }

    const changeToDoStatus = (id) => {

        let todo = todos.find(q => q.id == id);
        todo.isCompleted = !todo.isCompleted;

        settodos([...todos])
    }

    return (<>
        <div>
            <h1>ToDo Sample</h1>
        </div>
        <div>
            <h1>Completed: {todos.filter(q => q.isCompleted == true).length} </h1>
            <h1>Incompleted: {todos.filter(q => q.isCompleted == false).length} </h1>
        </div>
        <div>
            <label>Title:  </label>
            <input type='text' onChange={(e) => settitle(e.target.value)} />
        </div>
        <div>
            <button onClick={() => addNewTodo()}>Add New ToDo</button>
            <button onClick={() => settodos([])}>Clear All ToDos</button>
        </div>
        <div>
            <ul>
                {
                    todos.map(item => {
                        if (!item.isCompleted)
                            return <li style={{ cursor: 'pointer' }} onClick={() => changeToDoStatus(item.id)} key={item.id}>{item.title}</li>
                        else
                            return <li style={{ cursor: 'pointer', textDecoration: 'line-through' }} onClick={() => changeToDoStatus(item.id)} key={item.id}>{item.title}</li>
                    })
                }
            </ul>
        </div>
    </>
    )
}

export default ToDoSample

