import "./ordsingle.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Ordsingle = () => {
  return (
    <div className="ordsingle">
      <Sidebar />
      <div className="ordsingleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Order Info.</h1>
            <div className="item">
              <img 
              src="https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/images%2Farrow%20mug%2Farrow%20mugs.PNG?alt=media&token=36d79d73-0a4c-4a7a-95bf-a0b31d3a56fe" 
              alt=""
              className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">8756342</h1>
                <div className="detailItem">
                  <span className="itemKey">Product:</span>
                  <span className="itemValue">Arrow mugs</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Customer:</span>
                  <span className="itemValue">Sarah Johnson</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Date:</span>
                  <span className="itemValue">12-Apr-2023</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Amount:</span>
                  <span className="itemValue">Ksh2600</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue">Approved</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Payment:</span>
                  <span className="itemValue">Cash</span>
                </div>
              </div>
            </div> 
          </div>
          <div className="right">
            <Chart title="Order spending (Last 12 Months)" aspect={ 3/1 } />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Latest transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Ordsingle