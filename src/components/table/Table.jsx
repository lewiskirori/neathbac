import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

import "./table.scss"

function createData(tid, products, img, customers, date, amount, payment, status) {
    return {
      tid,
      products,
      img,
      customers,
      date,
      amount,
      payment,
      status,
    };
  }
  
  const rows = [
    createData(8756342, 'Kitchen Appliance', 'https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/images%2Farrow%20mug%2Farrow%20mugs.PNG?alt=media&token=36d79d73-0a4c-4a7a-95bf-a0b31d3a56fe', 'Sarah Johnson', '12, Apr 2023', 'KSH 2600', 'Cash on Delivery', 'Approved'),    
    createData(2674159, 'Electronic', 'https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/images%2Fgold%20and%20black%20decor%2Fgold%20and%20black%20decor.PNG?alt=media&token=b1d298f7-1244-40ea-bc34-d194b7280be0', 'John Smith', '5, May 2023', 'KSH 6800', 'Debit Card', 'Pending'),    
    createData(9432158, 'Clothing', 'https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/images%2Fwhite.PNG?alt=media&token=3a1ef0ec-aaf6-4362-967b-978ba66cd212', 'Maria Lopez', '2, Jan 2023', 'KSH 1200', 'M-Pesa', 'Approved'),    
    createData(3786241, 'Book', 'https://images.pexels.com/photos/6373309/pexels-photo-6373309.jpeg?auto=compress&cs=tinysrgb&w=600', 'David Lee', '19, Feb 2023', 'KSH 3500', 'Credit Card', 'Pending'),    
    createData(5623985, 'Beauty Product', 'https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg?auto=compress&cs=tinysrgb&w=600', 'Samantha Lee', '1, Mar 2023', 'KSH 500', 'Cash on Delivery', 'Approved'),    
    createData(1234567, 'Furniture', 'https://ecommerce-vite-six.vercel.app/img/blog1.webp', 'James Johnson', '8, Mar 2023', 'KSH 12300', 'M-Pesa', 'Pending'),    
    createData(5678234, 'Grocery', 'https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=600', 'Emily Davis', '11, Apr 2023', 'KSH 2900', 'Credit Card', 'Approved'),    
    createData(1298765, 'Toy', 'https://images.pexels.com/photos/1330638/pexels-photo-1330638.jpeg?auto=compress&cs=tinysrgb&w=600', 'Michael Wilson', '15, Mar 2023', 'KSH 800', 'Google Pay', 'Pending'),    
    createData(8765432, 'Pet Supply', 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600', 'Amanda Brown', '22, Feb 2023', 'KSH 1200', 'Cash on Delivery', 'Approved'),    
    createData(9812765, 'Sporting Attire', 'https://images.pexels.com/photos/8473456/pexels-photo-8473456.jpeg?auto=compress&cs=tinysrgb&w=600', 'Christopher Martin', '28, Jan 2023', 'KSH 4300', 'Debit Card', 'Pending'),    
    createData(3948271, 'Jewelry', 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nicole Anderson', '3, May 2023', 'KSH 6200', 'Money Transfer', 'Approved'),    
    createData(7259384, 'Home Decor', 'https://ecommerce-vite-six.vercel.app/img/blog3.webp', 'Andrew Thompson', '16, Mar 2023', 'KSH 1900', 'Credit Card', 'Pending'),    
    createData(1425367, 'Office Supply', 'https://images.pexels.com/photos/5882691/pexels-photo-5882691.jpeg?auto=compress&cs=tinysrgb&w=600', 'Kimberly Wilson', '9, Feb 2023', 'KSH 1500', 'M-Pesa', 'Approved'),
];
  
function descendingComparator(a, b, orderBy, data) {
  if (data) {
    a = a[data][orderBy];
    b = b[data][orderBy];
  } else {
    a = a[orderBy];
    b = b[orderBy];
  }

  if (typeof a === 'string') {
    a = new Date(a.split(', ').reverse().join(' '));
  } else {
    a = new Date(a);
  }

  if (typeof b === 'string') {
    b = new Date(b.split(', ').reverse().join(' '));
  } else {
    b = new Date(b);
  }

  if (b < a) {
    return -1;
  }
  if (b > a) {
    return 1;
  }
  return 0;
}
  
  function getComparator(order, orderBy, data) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy, data)
      : (a, b) => -descendingComparator(a, b, orderBy, data);
  }

  function stableSort(array, comparator, data) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  const headCells = [
    {
      id: 'tid',
      numeric: true,
      disablePadding: true,
      label: 'Tracking ID',
    },
    {
      id: 'products',
      numeric: false,
      disablePadding: false,
      label: 'Product',
    },
    {
      id: 'customers',
      numeric: false,
      disablePadding: false,
      label: 'Customer',
    },
    {
      id: 'date',
      numeric: true,
      disablePadding: false,
      label: 'Date',
    },
    {
      id: 'amount',
      numeric: true,
      disablePadding: false,
      label: 'Amount',
    },
    {
        id: 'payment',
        numeric: false,
        disablePadding: false,
        label: 'Pay Method',
      },
      {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status',
      },
  ];
  
  function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
        <TableHead>
          <TableRow className='tableHead'>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                align={headCell.numeric ? 'center' : 'center'}
                padding={headCell.disablePadding ? '' : 'normal'}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  
  function EnhancedTableToolbar(props) {
    const { numSelected } = props;
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected}
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            <div className='tableTitle'>
                Activity
            </div>
          </Typography>
        )}
  
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  }
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

  export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('date');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
      };
    
      const handleSelectAllClick = (event) => {
        if (event.target.checked) {
          const newSelected = rows.map((n) => n.name);
          setSelected(newSelected);
          return;
        }
        setSelected([]);
      };
    
      const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
    
        setSelected(newSelected);
      };
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
      const handleChangeDense = (event) => {
        setDense(event.target.checked);
      };
    
      const isSelected = (name) => selected.indexOf(name) !== -1;
    
      // Avoid a layout jump when reaching the last page with empty rows.
      const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    
      const visibleRows = React.useMemo(
        () =>
          stableSort(rows, getComparator(order, orderBy)).slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage,
          ),
        [order, orderBy, page, rowsPerPage],
      );
      return (
        <Box sx={{ width: '100%', overflowX: 'auto'}}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer className='table'>
              <Table
                sx={{ minWidth: 0 }}
                aria-labelledby="tableTitle"
                size={dense ? 'small' : 'medium'}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      className='tableCell'
                    >
                        <span className={`tid ${row.tid}`}>{row.tid}</span>
                    </TableCell>
                    <TableCell className='tableCell'>
                        <div className="cellWrapper">
                            <img src={row.img} alt="" className='image' />
                            {row.products}
                        </div>
                    </TableCell>
                    <TableCell className='tableCell'>
                        <span className={`customers ${row.customers}`}>{row.customers}</span>
                    </TableCell>
                    <TableCell className='tableCell'>
                        <span className={`date ${row.date}`}>{row.date}</span>
                    </TableCell>
                    <TableCell className='tableCell'>
                        <span className={`amount ${row.amount}`}>{row.amount}</span>
                    </TableCell>
                    <TableCell className='tableCell'>
                        <span className={`payment ${row.payment}`}>{row.payment}</span>
                    </TableCell>
                    <TableCell className='tableCell'>
                        <span className={`status ${row.status}`}>{row.status}</span>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination className='pagination'
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        ></TablePagination>
      </Paper>
      <FormControlLabel className='flabel'
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Plush cushioning"
      ></FormControlLabel>
    </Box>
    );
}      