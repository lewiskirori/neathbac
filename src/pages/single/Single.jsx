import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">User Information</h1>
            <div className="item">
              <img 
              src="https://images.pexels.com/photos/4355345/pexels-photo-4355345.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt=""
              className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">Snow</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">snow202@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+254 784 541 354</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Kenyatta Avenue, Jamia Hse, Nairobi Central</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Kenya</span>
                </div>
              </div>
            </div> 
          </div>
          <div className="right">
            <Chart title="User spending (Last 12 Months)" aspect={ 3/1 } />
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

export default Single