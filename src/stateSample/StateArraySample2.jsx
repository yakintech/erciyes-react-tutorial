import React, { useState } from 'react'

function StateArraySample2() {

    const [numbers, setnumbers] = useState([2, 15, 20, -22, 88, 82, 9, 37]);

    const add = () => {
        let randomNumber = Math.floor(Math.random() * 1000);

        //numbers.push(randomNumber);
        setnumbers([...numbers, randomNumber]);

    }

    const deleteItem = (key) => {

        numbers.splice(key, 1);
        setnumbers([...numbers])
    }

    return (<>
        <button onClick={() => setnumbers([])}>Clear</button>
        <h1>Length: {numbers.length}</h1>
        <ul>
            {
                numbers.map((item, index) => <li style={{ cursor: 'pointer' }} onClick={() => deleteItem(index)}>{item}</li>)
            }
        </ul>
        <button onClick={() => add()}>Add Random</button>
    </>)
}

export default StateArraySample2