import React, { useState } from 'react'

function AddBand({bands, setbands}) {
    const [name, setname] = useState('');

    const add = () => {
        setbands([...bands, name])
    }

    return (<>
        <div>

            <label>Name:</label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
            <button onClick={add}>Add New Band</button>
        </div>
    </>)
}

export default AddBand