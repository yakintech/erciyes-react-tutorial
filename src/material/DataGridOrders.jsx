import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataGridOrders() {

    const [orders, setorders] = useState([]);

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/orders')
            .then(res => {
                setorders(res.data);
            })

    }, [])

    let columns = [
        {
            headerName:'Id',
            field:'id',
            width:150
        },
        {
            headerName:'Ship Name',
            field:'shipName',
            width:150
        },
        {
            headerName:'Freight',
            field:'freight',
            width:150
        }
    ]


    return (<>
    <div style={{ height: 400, width: '100%' }}>
         <DataGrid
            rows={orders}
            columns={columns}
        />
    </div>
       
    </>
    )
}

export default DataGridOrders