import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Users</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
              <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title">
          Total users came today
        </p>
        <p className="amount">
          2000
        </p>
        <p className="desc">
          Previous Request processing . last requests may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
               <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult positive">
               <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last month</div>
            <div className="itemResult positive">
               <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured