/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "../Assets/person.png";
import password_icon from "../Assets/password.png";

function LoginSignup() {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">Chat App</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="Username"></img>
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password"></img>
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Signup");
          }}
        >
          Signup
        </div>
        <div
          className={action === "Login" ? "submit" : "submit gray"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
