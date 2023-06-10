import "./psingle.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useProducts } from "../../context/ProductContext";
import { useEffect, useState } from "react";

let dummyData = {
  img: "",
  productname: "",
  price: "",
  status: "",
};

const Psingle = (props) => {
  const pathname = window.location.pathname;
  const myID = pathname.split("/products/")[1];
  const { getSingleProduct } = useProducts();
  const [product, setProduct] = useState(dummyData);

  console.log(product);
  useEffect(() => {
    let val = getSingleProduct(myID);
    // console.log(val);
    setProduct(val);
  }, []);

  const getstuff = () => {
    let val = getSingleProduct(myID);
    // console.log(val);
  };

  return (
    <div className="psingle">
      <Sidebar />
      <div className="psingleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">
              Product Info.
            </h1>
            <div className="item">
              <img src={product.img} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{product.productname}s</h1>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">Ksh{product.price}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Count:</span>
                  <span className="itemValue">5</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Category:</span>
                  <span className="itemValue">Kitchen appliances</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue">{product.status}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart title="Product sales (Last 12 Months)" aspect={3 / 1} />
          </div>
        </div>
        {/* <div className="bottom">
          <h1 className="title">Latest transactions</h1>
          <List />
        </div> */}
      </div>
    </div>
  );
};

export default Psingle;
