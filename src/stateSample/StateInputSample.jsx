import React, { useState } from 'react'

function StateInputSample() {

    const [name, setname] = useState('');

    return (<>
        <input type='text' onChange={(e) => setname(e.target.value)} />
        <h1>{name}</h1>


    </>)
}

export default StateInputSample