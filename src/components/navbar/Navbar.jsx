import "./navbar.scss";
import React, { useState, useEffect } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Sidebar from "../sidebar/Sidebar";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAddSharpIcon from "@mui/icons-material/PersonAddSharp";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import Typography from "@mui/material/Typography";
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Visibility } from "@mui/icons-material";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [notificationCount, setNotificationCount] = useState("0");
  const { currentUser,userDetails,logout } = useContext(AuthContext);
  const [showLoader,setShowLoader] = useState(true);

  const { dispatch } = useContext(DarkModeContext);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setIsActive(!isActive);
  };
  const time = new Date().getHours();
  let greeting;

  if (time >= 0 && time < 12) {
    greeting = (
      <span>
        Good <span className="timeColor">Morning</span>
      </span>
    );
  } else if (time >= 12 && time < 16) {
    greeting = (
      <span>
        Good <span className="timeColor">Afternoon</span>
      </span>
    );
  } else if (time >= 16 && time < 22) {
    greeting = (
      <span>
        Good <span className="timeColor">Evening</span>
      </span>
    );
  } else if (time >= 22 && time < 24) {
    greeting = (
      <span>
        Good <span className="timeColor">Night</span>
      </span>
    );
  }
  // search value
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue("");
  };

  useEffect(() => {
    const storedSearchValue = localStorage.getItem("searchValue");
    if (storedSearchValue) {
      setSearchValue(storedSearchValue);
    }
    setTimeout(()=>{
      setShowLoader(false)
    },1000)
  }, []);

  useEffect(() => {
    localStorage.setItem("searchValue", searchValue);
  }, [searchValue]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // search query
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    setSearchQuery(searchValue);
    setSearchValue("");
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams();
    if (searchQuery) {
      queryParams.set("search_query", searchQuery);
    }
    const path = `${window.location.pathname}?${queryParams}`;
    window.history.pushState({}, "", path);
  }, [searchQuery]);

  // useEffect(() => {
  //   setNotificationCount(0);
  // });

  // console.log(notificationCount);

  if (!currentUser) {
    return <Navigate to="/" />;
  }else{
  return (
    <div className="navbar">
      <div className="loader" style={{visibility: showLoader? "visible":"hidden" }}>
      <img src="img/nhb_logo.png" alt="nhb_logo" />
      </div>
      {showSidebar && (
        <Sidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          toggleSidebar={toggleSidebar}
        />
      )}
      <div className="wrapper">
        <MenuRoundedIcon
          className={`menu-icon ${isActive ? "active" : ""}`}
          onClick={toggleSidebar}
        />
        <div className="timeoftheDay">{greeting}</div>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchChange}
            onKeyPress={handleEnterPress}
          />
          {searchValue && (
            <CloseRoundedIcon
              className="close-icon"
              onClick={handleClearSearch}
            />
          )}
          <Tooltip title="Search">
            <IconButton className="search-icon" onClick={handleSearchClick}>
              <SearchRoundedIcon className="search-icon" />
            </IconButton>
          </Tooltip>
        </div>
        <div className="items">
          {/* <div className="item">
            <Tooltip title="Color Mode">
              <IconButton onClick={() => dispatch({ type: "TOGGLE" })}>
                <DarkModeRoundedIcon className="navicon" />
              </IconButton>
            </Tooltip>
          </div> */}
          <PopupState variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
              <div className="item">
                <IconButton
                  variant="contained"
                  {...bindToggle(popupState)}
                  className="icon"
                >
                  <NotificationsNoneRoundedIcon className="navicon" />
                  <div className={notificationCount > 0 ? "counter" : ""}>
                    {notificationCount > 0 ? notificationCount : ""}
                  </div>
                  <Popper {...bindPopper(popupState)} transition>
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                          <Typography sx={{ p: 2 }}>
                            {notificationCount > 0 ? notificationCount : "No "}{" "}
                            Notification.
                          </Typography>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </IconButton>
              </div>
            )}
          </PopupState>
          <div className="item">
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Neat home basics admin">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <img
                      src={userDetails.img}
                      alt=""
                      className="avatar"
                    />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Link
                  to="/account"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  <MenuItem onClick={handleClose}>
                    <img
                      src="https://images.pexels.com/photos/10394207/pexels-photo-10394207.jpeg?cs=srgb&dl=pexels-mostafaft-shots-10394207.jpg&fm=jpg&_gl=1*xeb6ut*_ga*MzkxMzI1ODAwLjE2ODMyMjIxOTM.*_ga_8JE65Q40S6*MTY4MzIyMjE5OS4xLjEuMTY4MzIyNDMzOS4wLjAuMA.."
                      alt="account avi"
                      className="avatar"
                      style={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginRight: "10px",
                      }}
                    />{" "}
                    My account
                  </MenuItem>
                </Link>
                <Divider />
                <Link
                  to="/account/new"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PersonAddSharpIcon fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                </Link>
                <Link
                  to="/account/settings"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <SettingsSuggestRoundedIcon fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                </Link>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  <MenuItem
                    onClick={() => {
                      logout();
                      handleClose();
                    }}
                  >
                    <ListItemIcon>
                      <PowerSettingsNewRoundedIcon fontSize="small" />
                    </ListItemIcon>
                    Log out
                  </MenuItem>
                </Link>
              </Menu>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};
}

export default Navbar;
