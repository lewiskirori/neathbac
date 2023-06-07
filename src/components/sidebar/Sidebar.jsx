import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = ({ showSidebar, toggleSidebar }) => {
    const {logout} = useContext(AuthContext)

  return (
    <>
    <div className={`sidebar ${showSidebar ? "open" : "closed"}`}>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <div className="top">
                <span className="logo">
                    <img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/nhb_logo.png?alt=media&token=dfad5ce2-8606-43b7-9565-ff9739e6b3c1&_gl=1*137kicg*_ga*MjEyMDk4MTEyLjE2NzY5ODYyODI.*_ga_CW55HF8NVT*MTY4NjE1NzYyNC44MS4xLjE2ODYxNTc2OTYuMC4wLjA." alt="nhb_logo" />
                    </span>
            </div>
        </Link>
        {showSidebar && (
            <CloseRoundedIcon
                style={{ fontSize: "2rem", position: "absolute", 
                top: 10, 
                right: -40, 
                border: "1px solid #fff",
                color: "#f5f5f5", 
                cursor: "pointer" }}
                onClick={toggleSidebar}
            />
        )}
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <li>
                        <Tooltip title="My Dashboard">
                        <DashboardIcon className="icon" /></Tooltip> 
                        <span>Dashboard</span>
                    </li>
                </Link>                   
                <p className="title">LISTS</p>
                <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <Tooltip title="Users">
                            <PersonOutlinedIcon className="icon" /></Tooltip>
                            <span>Users</span>
                        </li>
                </Link>
                <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <Tooltip title="Products">
                            <StorefrontIcon className="icon" /></Tooltip>
                            <span>Products</span>
                        </li>
                </Link>
                <Link to="/blogs" style={{ textDecoration: "none" }}>
                    <li>
                        <Tooltip title="Blogs">
                        <RssFeedIcon className="icon" /></Tooltip>
                        <span>Blogs</span>
                    </li>
                </Link>
                <Link to="/orders" style={{ textDecoration: "none" }}>
                    <li>
                        <Tooltip title="Orders">
                        <CreditCardIcon className="icon" /></Tooltip>
                        <span>Orders</span>
                    </li>
                </Link>
                <p className="title">USER</p>
                <Link to="/account" style={{ textDecoration: "none" }}>
                    <li>
                        <Tooltip title="Profile">
                        <PersonSharpIcon className="icon" /></Tooltip>
                        <span>My Account</span>
                    </li>
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }} onClick={logout}>
                    <li>
                        <Tooltip title="Sign Out">
                        <LogoutIcon className="icon" /></Tooltip>
                        <span>Log Out</span>
                    </li>
                </Link>
            </ul>
        </div>

    </div>
    {showSidebar && <div className="overlay" onClick={toggleSidebar} />}
    </>
  )
}

export default Sidebar