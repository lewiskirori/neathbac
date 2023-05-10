import "./psingle.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Psingle = () => {
  return (
    <div className="psingle">
      <Sidebar />
      <div className="psingleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Product Info.</h1>
            <div className="item">
              <img 
              src="https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/images%2Farrow%20mug%2Farrow%20mugs.PNG?alt=media&token=36d79d73-0a4c-4a7a-95bf-a0b31d3a56fe" 
              alt=""
              className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">Arrow mugs</h1>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">Ksh1800</span>
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
                  <span className="itemKey">Stock:</span>
                  <span className="itemValue">Active</span>
                </div>
              </div>
            </div> 
          </div>
          <div className="right">
            <Chart title="Product spending (Last 12 Months)" aspect={ 3/1 } />
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

export default Psingle