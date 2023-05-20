import "./products.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, productRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "../../context/ProductContext";

const Products = () => {
  const [data, setData] = useState(productRows);

  const { products, deleteProduct } = useProducts();
  const handleDelete = (id) => {
    deleteProduct(id);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={"/products/" + params.id}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="products">
      <Sidebar />
      <div className="productsContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">
            Product
            <Link
              to="/products/new"
              style={{ textDecoration: "none" }}
              className="link"
            >
              Add Product
            </Link>
          </div>
          <DataGrid
            className="datagrid"
            rows={products}
            columns={productColumns.concat(actionColumn)}
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
  );
};

export default Products;
