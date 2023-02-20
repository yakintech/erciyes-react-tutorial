import React, { useState } from 'react'

function StateSample2() {

    console.log('State sample2 component rendered! ');
    const [name, setname] = useState('Çağatay');


    return (<>
        <h1>{name}</h1>
        <button onClick={() => setname('Erciyes Üniversitesi')}>Change</button>
    </>
    )
}

export default StateSample2