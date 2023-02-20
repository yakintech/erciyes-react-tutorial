import React, { useState } from 'react'

function StateSample() {

    const [counter, setcounter] = useState(0);

    const increase = () => {
        setcounter(counter + 1);
    }

    return (<>
        <h1>{counter}</h1>
        <button onClick={increase}>Increase</button>
    </>
    )
}

export default StateSample