import Chart from "../../components/chart/Chart"
import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Table from "../../components/table/Table"
import Widget from "../../components/widget/Widget"
import "./home.scss"

const Home = ({aspect,title}) => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homecontainer">
          <Navbar/>
          <div className="widgets">
            < Widget type="user"/>
            < Widget type="order"/>
            < Widget type="earning"/>
            < Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart title="Last 6 Months (Requests)" aspect={2/1}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">
              Latest Requests
            </div>
            <Table/>
          </div>
        </div>
    </div>
  )
}

export default Home