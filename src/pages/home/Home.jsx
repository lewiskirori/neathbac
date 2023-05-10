import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"


const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
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

export default Home