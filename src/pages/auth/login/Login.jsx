import React, { useState } from "react";
import "./login.scss";
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome back</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" required="required" />
          <label htmlFor="password">Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              required="required"
            />
            {showPassword ? (
              <VisibilityOffRoundedIcon
                onClick={handleTogglePassword}
                style={{ position: "absolute", top: 12, right: 10, cursor: "pointer", color: "lightgray" }}
              >
                Hide
              </VisibilityOffRoundedIcon>
            ) : (
              <VisibilityRoundedIcon
                onClick={handleTogglePassword}
                style={{ position: "absolute", top: 12, right: 10, cursor: "pointer", color: "lightgray" }}
              >
                Show
              </VisibilityRoundedIcon>
            )}
          </div>
          <button type="submit">
            <LockOutlinedIcon />
            <span class="text">Login</span>
          </button>
        </form>
        <p className="copy-text">
          &copy; {new Date().getFullYear()} NeatHBAdmin. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
