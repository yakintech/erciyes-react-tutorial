import React from 'react'

function BandList(props) {


    let { bands, setbands } = props;

    const clearAll = () => {
        setbands([]);
    }

    return (<>
        <ul>
            {
                bands.map(item => <li>{item}</li>)
            }
        </ul>
        <button onClick={clearAll}>Clear All Bands</button>
    </>)
}

export default BandList