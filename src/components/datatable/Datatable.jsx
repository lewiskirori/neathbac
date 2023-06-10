import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useUsers } from '../../context/UserContext';

const Datatable = () => {
    const [data, setData] = useState(userRows)

    const {users ,deleteUser} = useUsers()
    const handleDelete = (id) => {
        deleteUser(id)
    }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                // console.log(params)
                return (
                    <div className='cellAction'>
                        <Link to={"/users/"+ params.row.email} state={params.row} style={{ textDecoration: "none" }}>
                            <div className='viewButton'>View</div>
                        </Link>
                        <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
                    </div>
                )
            }
        }
    ]
  return (
    <div className='datatable' >
        <div className="datatableTitle">
            Users
            {/* <Link to="/users/new" style={{ textDecoration: "none" }} className='link'>
                Add New
            </Link> */}
        </div>
        <DataGrid
            className='datagrid'
            rows={users}
            columns={userColumns.concat(actionColumn)}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 10 },
            },
            }}
            pageSizeOptions={[10, 20, 25, 50, 100]}
            checkboxSelection
            style={{ width: '100%' }}
        />    
      </div>
  )
}

export default Datatable