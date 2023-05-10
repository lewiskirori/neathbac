import * as React from 'react';
import "./featured.scss"
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const options = [
    'Target',
    'Last Week',
    'Last Month',
    'Last Year',
];
 
const ITEM_HEIGHT = 48;

const Featured = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
              <IconButton 
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              className="morevert">
                <MoreVertRoundedIcon fontSize="small" />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
                }}
                >
                {options.map((option) => (
                <MenuItem key={option} selected={option === 'Last Month'} onClick={handleClose}>
                    {option}
                </MenuItem>
                ))}
                </Menu>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">Ksh.{(4200).toLocaleString()}</p>
            <p className="desc">
                Previous transactions processing. Last payments may not be included.
            </p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                            <ArrowDropUpIcon />
                            <div className="resultAmount">Ksh{(12400).toLocaleString()}</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult negative">
                            <ArrowDropDownIcon />
                            <div className="resultAmount">Ksh{(12200).toLocaleString()}</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                            <ArrowDropUpIcon />
                            <div className="resultAmount">Ksh{(32400).toLocaleString()}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured