import * as React from "react";
import "./account.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const handleOpen = () => {};

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>AGREE</Button>
    </React.Fragment>
  );
}

export const Account = () => {
  const { userDetails } = useContext(AuthContext);

  console.log(userDetails);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <Link
              to="/account/settings"
              style={{ textDecoration: "none" }}
              className="link"
            >
              <div className="editButton">Update Account</div>
            </Link>
            <h1 className="title">Your Profile</h1>
            <div className="item">
              <img
                src={userDetails.img}
                alt="Profile Avatar"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{userDetails.firstname}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{userDetails.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">First Name:</span>
                  <span className="itemValue">{userDetails.firstname}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Last Name:</span>
                  <span className="itemValue">{userDetails.lastname}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{userDetails.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Undisclosed location</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            {userDetails.role == "admin" ? (
              <Link
                to="/account/new"
                style={{ textDecoration: "none" }}
                className="link"
              >
                <div className="link create">Create New Account</div>
              </Link>
            ) : (
              <></>
            )}
            {userDetails.role == "superuser" ? (
              <Link
                to="/account/new"
                style={{ textDecoration: "none" }}
                className="link"
              >
                <div onClick={handleOpen} className="link delete">
                  Delete Account
                </div>
              </Link>
            ) : (
              <></>
            )}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box
                sx={{
                  ...style,
                  width: "90%",
                  maxWidth: 400,
                }}
              >
                <h2 id="parent-modal-title">
                  You are about to delete this Profile
                </h2>
                <p id="parent-modal-description">
                  Do you really want to delete your account?
                </p>
                <ChildModal />
                <Button onClick={handleClose}>DISAGREE</Button>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
