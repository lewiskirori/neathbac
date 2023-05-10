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

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to="/" style={{ textDecoration: "none" }}>
            <div className="top">
                <span className="logo">NeatHBAdmin</span>
            </div>
        </Link>
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
                <Link to="/auth/SignOut/" style={{ textDecoration: "none" }}>
                    <li>
                        <Tooltip title="Sign Out">
                        <LogoutIcon className="icon" /></Tooltip>
                        <span>Log Out</span>
                    </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar