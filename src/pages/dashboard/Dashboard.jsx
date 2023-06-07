import "./dashboard.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"


const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/" />;
  } else {
  return (
    <div className="dashboard">
        <Sidebar />
        <div className="dashboardContainer">
            <Navbar />
            <div className="widgets">
                <Widget type="user" />
                <Widget type="order" />
                <Widget type="earning" />
                <Widget type="balance" />
            </div>
            <div className="charts">
                <Featured />
                <Chart title="Last 12 Months (Monthly Revenue)" aspect= {2/1} />
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest transactions</div>
              <Table />
            </div>
        </div>
    </div>
  )
  }
}

export default Dashboard