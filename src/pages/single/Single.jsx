import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"
import { useLocation } from "react-router-dom"

const Single = () => {
  const data = useLocation();

  const values = data.state;

  // console.log(data.state)
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">User Information</h1>
            <div className="item">
              <img 
              src={values.img} 
              alt={values.username + "image"}
              className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">{values.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{values.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{values.phone}</span>
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
        {/* <div className="bottom">
        <h1 className="title">Latest transactions</h1>
          <List />
        </div> */}
      </div>
    </div>
  )
}

export default Single