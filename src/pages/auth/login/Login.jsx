import "./login.scss"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Snackbar, Button } from "@mui/material";
import { Alert } from "@mui/material";
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "adminnhb" && password === "#admin?y=nhb#") {
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
      setOpenSnackbar(true);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome back</h1>
        <form method="" onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            autoFocus 
          />
          <label htmlFor="password">Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {showPassword ? (
              <VisibilityOffRoundedIcon
                onClick={handleTogglePassword}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 10,
                  cursor: "pointer",
                  color: "lightgray",
                }}
              >
                Hide
              </VisibilityOffRoundedIcon>
            ) : (
              <VisibilityRoundedIcon
                onClick={handleTogglePassword}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 10,
                  cursor: "pointer",
                  color: "lightgray",
                }}
              >
                Show
              </VisibilityRoundedIcon>
            )}
          </div>
          <button type="submit">
            <LockOutlinedIcon />
            <span className="text">Login</span>
          </button>
        </form>
        <p className="copy-text">
          &copy; {new Date().getFullYear()} NHBAdmin. All rights reserved.
        </p>
      </div>
      <Snackbar
        open={openSnackbar}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
        severity="success"
        action={
          <Button
            component={Link}
            to="/dashboard"
            color="inherit"
            size="small"
          >
            Go to Admin Console
          </Button>
        }
      >
        You are logged in!
      </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
