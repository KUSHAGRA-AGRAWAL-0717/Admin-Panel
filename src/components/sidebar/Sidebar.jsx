import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {Link} from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Job Listing Portal</span>
        </Link>
        
      </div>
      <hr/>
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
          <li><DashboardIcon className="icon"/><span>Dashboard</span></li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration:"none"}}>
          <li><PersonIcon className="icon"/><span>Users</span></li></Link>
          <Link to="/products" style={{textDecoration:"none"}}>
          <li><ProductionQuantityLimitsOutlinedIcon className="icon"/><span>Roles</span></li></Link>
          <li><BorderColorOutlinedIcon className="icon"/><span>Authorities</span></li>
          <li><LocalShippingOutlinedIcon className="icon"/><span>Request Status</span></li>
          <p className="title">USEFUL</p>
          <li><QueryStatsOutlinedIcon className="icon"/><span>Stats</span></li>
          <li><NotificationsOutlinedIcon className="icon"/><span>Notifications</span></li>
          <p className="title">SERVICE</p>
          <li><MonitorHeartOutlinedIcon className="icon"/><span>Organisation</span></li>
          <li><PsychologyOutlinedIcon className="icon"/><span>Logs</span></li>
          <li><SettingsOutlinedIcon className="icon"/><span>Settings</span></li>
          <p className="title">USER</p>
          <li><AccountCircleIcon className="icon"/><span>Profile</span></li>
          <li><ExitToAppOutlinedIcon className="icon"/><span>Logout</span></li>
        </ul>
      </div>
      <div className="bottom">
        <div className="coloroption"></div>
        <div className="coloroption"></div>
        
      </div>
    </div>
  );
};

export default Sidebar;
