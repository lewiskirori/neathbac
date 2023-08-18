import * as React from 'react';
import "./account.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #8884d8',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const handleOpen = () => {
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>AGREE</Button>
    </React.Fragment>
  );
}

export const Account = () => {
  const [open, setOpen] = React.useState(false);
  const [openImageModal, setOpenImageModal] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageModalOpen = () => {
    setOpenImageModal(true);
  };

  const handleImageModalClose = () => {
    setOpenImageModal(false);
  };

  return (
    <div className="profile">
        <Sidebar />
        <div className="profileContainer">
            <Navbar />
            <div className="top">
            <div className="left">
              <Link to="/account/settings" style={{ textDecoration: "none" }} className='link'>
              <div className="editButton">Update Account</div>
              </Link>
              <h1 className="title">Your Profile</h1>
              <div className="item">
                <Tooltip title="View avatar">
                <img onClick={handleImageModalOpen}
                src="https://images.pexels.com/photos/10394207/pexels-photo-10394207.jpeg?cs=srgb&dl=pexels-mostafaft-shots-10394207.jpg&fm=jpg&_gl=1*xeb6ut*_ga*MzkxMzI1ODAwLjE2ODMyMjIxOTM.*_ga_8JE65Q40S6*MTY4MzIyMjE5OS4xLjEuMTY4MzIyNDMzOS4wLjAuMA.." 
                alt="Profile Avatar"
                className="itemImg" 
                />
                </Tooltip>
                <div className="details">
                  <h1 className="itemTitle">Neathbadmin</h1>
                  <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">nbhadmin101@domain.com</span>
                  </div>
                  <div className="detailItem">
                  <span className="itemKey">First Name:</span>
                  <span className="itemValue">Neat</span>
                  </div>
                  <div className="detailItem">
                  <span className="itemKey">Last Name:</span>
                  <span className="itemValue">Admin</span>
                  </div>
                  <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+254 700 121 345</span>
                  </div>
                  <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Undisclosed location</span>
                  </div>
                </div>
            </div>
            <div className="right">
              <Link to="/account/new" style={{ textDecoration: "none" }} className='link'>
              <div className="link create">Create New Account</div>
              </Link>
              <div onClick={handleOpen} className="link delete">
                Delete Account
              </div>
              <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="parent-modal-title"
                  aria-describedby="parent-modal-description"
                >
                  <Box sx={{ 
                    ...style,
                    width: "90%",
                    maxWidth: 400, 
                    }}>
                    <h2 id="parent-modal-title">You are about to delete this account</h2>
                    <p id="parent-modal-description">
                      Do you really want to delete your profile?
                    </p>
                    <ChildModal />
                    <Button onClick={handleClose}>DISAGREE</Button>
                  </Box>
              </Modal>
              <Modal
                  open={openImageModal}
                  onClose={handleImageModalClose}
                  aria-labelledby="image-modal-title"
                  aria-describedby="image-modal-description"
                >
                  <Box 
                    sx={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      width: '100vw',
                      height: '100vh',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    }}
                    onClick={handleImageModalClose} 
                  >
                    <img 
                      src="https://images.pexels.com/photos/10394207/pexels-photo-10394207.jpeg?cs=srgb&dl=pexels-mostafaft-shots-10394207.jpg&fm=jpg&_gl=1*xeb6ut*_ga*MzkxMzI1ODAwLjE2ODMyMjIxOTM.*_ga_8JE65Q40S6*MTY4MzIyMjE5OS4xLjEuMTY4MzIyNDMzOS4wLjAuMA.." 
                      alt="Profile Avatar"
                      style={{
                        width: '90%',
                        maxWidth: '400px',
                        height: 'auto',
                        objectFit: 'cover',
                      }}                    
                    />
                  </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
