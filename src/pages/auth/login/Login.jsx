import React, { useContext, useState } from "react";
import "./Login.scss";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";
import Password from "./Password/Password";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser, signin } = useContext(AuthContext);
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const navigate = useNavigate();

  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  };

  // const showPasswordReset =(event) =>{

  // }

  const submit = (event) => {
    event.preventDefault();
    const emailVal = email.trim;
    const passVal = password.trim;
    if (emailVal != "" && passVal != "") {
      const result = signin(email, password);
      // console.log(result);
      result
        .then((value) => {
          if (value == true) {
            alert(value);
            navigate("/");
          }
          console.log(value); // 👉️ "bobbyhadz.com"
        })
        .catch((err) => {
          // console.log(err);
        });
    }
  };
  if (currentUser) {
    return <Navigate to="/dashboard" />;
  } else {
    return (
      <div className="signin">
        <div className="main">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <form
            action="/"
            className="form"
            method="post"
            onSubmit={() => false}
          >
            <img src="img/nhb_logo.png" alt="nhb_logo" />
            <input
              type="email"
              placeholder="Enter email address"
              required
              onChange={(event) => setEmail(event.target.value)}
              onKeyDown={handleEnter}
            />
            <input
              type="password"
              placeholder="Enter Password"
              required
              onChange={(event) => setPassword(event.target.value)}
              onKeyDown={handleEnter}
            />
            <button
              type="submit"
              onClick={submit}
              // onSubmit={(event) => event.preventDefault()}
            >
              Sign in
            </button>
            <span id="forgot" onClick={() => setShowPasswordReset(true)}>
              forgot password?
            </span>
          </form>
          {/* </div> */}
        </div>
        <Password
          isShow={showPasswordReset}
          cancel={() => setShowPasswordReset(false)}
        />
      </div>
    );
  }
};

export default LogIn;
