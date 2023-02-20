import React, { useState } from 'react'

function StateArraySample() {

    const [cities, setcities] = useState(['İstanbul', 'Ankara', 'İzmir', 'Kayseri']);

    const clearAll = () => {
        setcities([]);
    }

    return (<>
        <h1>City Length: {cities.length}</h1>
        <ul>
            {
                cities.map(item => <li>{item}</li>)
            }
        </ul>
        <button onClick={() => clearAll()}>Clear All Cities</button>
    </>
    )
}

export default StateArraySample