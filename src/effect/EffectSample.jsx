import axios from 'axios';
import React, { useEffect, useState } from 'react'


//State Hook
//Effect Hook
function EffectSample() {

    const [counter, setcounter] = useState(0);
    const increase = () => {
        setcounter(counter + 1);
    }

    //Aşağıdaki useEffect kod bloğu SADECE BİR KERE ÇALIŞIR!
    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/products')
        .then(res => {
            console.log('Data ', res.data);
        })

    }, [])

    
    return (<>
        <h1>{counter}</h1>
        <button onClick={increase}>Increase</button>
        <ul>
            
        </ul>
    </>)
}

export default EffectSample