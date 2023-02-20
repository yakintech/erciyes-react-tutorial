import React, { useState } from 'react'

function StateSample3() {

    const [name, setname] = useState('');
    const [countries, setcountries] = useState([]);

    const addNewCountry = () => {
        setname('');
        setcountries([...countries, name]);
    }

    return (<>
        <div>
            <h1>Length: {countries.length}</h1>
        </div>
        <div>
            <label>Country Name:</label>
            <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <button onClick={() => addNewCountry()}>Add</button>
            <button onClick={() => setcountries([])}>Clear</button>

        </div>
        <div>
            <ul>
                {
                    countries.map(item => <li>{item}</li>)
                }
            </ul>
        </div>
    </>
    )
}

export default StateSample3