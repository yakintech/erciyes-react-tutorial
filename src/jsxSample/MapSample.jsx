import React from 'react'

function MapSample() {

    let cities = ['İzmir', 'İstanbul', 'Ankara', 'Kayseri', 'Erzurum', 'Diyarbakır']

    return (<>
        <ul>
            {
                cities.map((item) => {
                    return <li>{item}</li>
                })  
            }
        </ul>
    </>)
}

export default MapSample