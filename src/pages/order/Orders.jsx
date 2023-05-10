import "./orders.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { DataGrid } from '@mui/x-data-grid';
import { orderColumns, orderRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Orders = () => {
    const [data, setData] = useState(orderRows)
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className='cellAction'>
                        <Link to="/orders/test101" style={{ textDecoration: "none" }}>
                            <div className='viewButton'>View</div>
                        </Link>
                        <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
                    </div>
                )
            }
        }
    ]
  return (
    <div className="orders">
        <Sidebar />
        <div className="ordersContainer">
            <Navbar />
            <div className='datatable' >
            <div className="datatableTitle">
                Order
                <Link to="/orders/new" style={{ textDecoration: "none" }} className='link'>
                    Add Order
                </Link>
            </div>
            <DataGrid
                className='datagrid'
                rows={data}
                columns={orderColumns.concat(actionColumn)}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                },
                }}
                pageSizeOptions={[10, 20, 25, 50, 100]}
                checkboxSelection
            />    
            </div>
        </div>
    </div>
  )
}

export default Orders