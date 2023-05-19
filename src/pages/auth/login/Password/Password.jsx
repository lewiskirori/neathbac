import React, { useContext,useState } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import "./Password.scss";

const Password = (props) => {
  const [email, setEmail] = useState("");
  const { triggerResetEmail } = useContext(AuthContext);
  // const auth = getAuth();

  const ResetEmail = async () => {
    const emailVal = email.trim;
    if (emailVal != "") {
      const result = triggerResetEmail(email);
      result
        .then((value) => {
          if (value) {
            // alert("success");
            props.cancel();
            // navigate("/");
          }
          // console.log(value); // 👉️ "bobbyhadz.com"
        })
        .catch((err) => {
          // console.log(err);
        });
    }
    // await sendPasswordResetEmail(auth, email);
    // console.log("Password reset email sent");
  };
  return (
    <div
      className="password"
      style={{
        transform: props.isShow ? "translate(0,0)" : "translate(0,100vh)",
      }}
    >
      <div className="passform">
        <span className="bx bx-x" id="cancel" onClick={props.cancel}></span>
        <h2>Forgot Password?</h2>
        <p>Enter email to get password reset</p>
        <input
          type="email"
          placeholder="Email address"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <button onClick={ResetEmail}>submit</button>
      </div>
    </div>
  );
};

export default Password;
