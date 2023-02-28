import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataGridOrders() {

    const [orders, setorders] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {

        loadData();

    }, [])

    const loadData = () => {
        axios.get('https://northwind.vercel.app/api/orders')
            .then(res => {
                setorders(res.data);
                setloading(false)
            })
    }


    const deleteOrder = (item) => {
        setloading(true);
        axios.delete('https://northwind.vercel.app/api/orders/' + item.id)
            .then(res => {
                loadData();
            })

    }

    let columns = [
        {
            headerName: 'Id',
            field: 'id',
            flex: 0.3

        },
        {
            headerName: 'Ship Name',
            field: 'shipName',
            flex: 1
        },
        {
            headerName: 'Freight',
            field: 'freight',
            flex: 1
        },
        {
            headerName: 'Delete',
            renderCell: (item) => {
                return <Button color='error' onClick={() => deleteOrder(item)}>Delete</Button>
            }
        }
    ]


    return (<>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={orders}
                columns={columns}
                pageSize={20}
                loading={loading}
            />
        </div>

    </>
    )
}

export default DataGridOrders