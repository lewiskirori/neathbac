import "./widget.scss"
import { Link } from "react-router-dom";
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({ type }) => {
    let data;
  
    // set amount and diff based on widget type
    let amount, diff;
    switch(type){
      case "user":
        amount = 150;
        diff = 30;
        data = {
          title: "USERS",
          isMoney: false,
          link: <Link to="/users" style={{ textDecoration: "none", color: "purple"}}>
            View all Users</Link>,
          icon: (
            <PersonOutlinedIcon 
              className ="icon"
              style = {{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        };
        break;
      case "order":
        amount = 200;
        diff = 40;
        data = {
          title: "ORDERS",
          isMoney: false,
          link: <Link to="/orders" style={{ textDecoration: "none", color: "goldenrod" }}>
            View all Orders</Link>,
          icon: (
            <ShoppingCartOutlinedIcon 
              className="icon"
              style = {{
                color: "goldenrod",
                backgroundColor: "rgba(218, 165, 32, 0.2)",
              }}
            />
          ), 
        };
        break;
      case "earning":
        amount = 5000;
        diff = 10;
        data = {
          title: "EARNING",
          isMoney: true,
          link: <Link to="/dashboard" style={{ textDecoration: "none", color: "green" }}>
            View net Earning</Link>,
          icon: (
            <MonetizationOnOutlinedIcon 
              className="icon"
              style = {{
                color: "green",
                backgroundColor: "rgba(0, 128, 0, 0.2)",
              }}
            />
          ),  
        };
        break;
      case "balance":
        amount = 10000;
        diff = -5;
        data = {
          title: "BALANCE",
          isMoney: true,
          link: <Link to="/dashboard" style={{ textDecoration: "none", color: "purple" }}>
            View details</Link>,
          icon: (
            <AccountBalanceWalletOutlinedIcon 
              className="icon"
              style = {{
                color: "purple",
                backgroundColor: "rgba(128, 0, 128, 0.2)",
              }}
            />
          ),   
        };
        break;
      default:
        break;
    }
  
    return (
      <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.isMoney && "Ksh"} {amount.toLocaleString()}
          </span>
          <Link to="/" style={{ textDecoration: "none" }} className='link'>
          <span className="link">{data.link}</span>
          </Link>
        </div>
        <div className="right">
          <div className={`percentage ${diff >= 0 ? 'positive' : 'negative'}`}>
            {diff >= 0 ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
            {Math.abs(diff)} %
          </div>
          {data.icon}
        </div>
      </div>
    )
  }
  
  export default Widget
  