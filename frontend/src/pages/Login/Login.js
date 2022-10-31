import React from "react";
import "./Login.scss";

export default function Login() {
  return (
    <div className="box">
      <div className="box__form">
        <h2>Login</h2>
        <div className="box__form--input-box">
          <input
            type="text"
            id="username"
            name="username"
            placeholder=""
            required="required"
          />
          <span>Username</span>
          <i></i>
        </div>
        <div className="box__form--input-box">
          <input
            type="text"
            id="password"
            name="password"
            placeholder=""
            required="required"
          />
          <span>Password</span>
          <i></i>
        </div>
        <div className="box__form--link">
          <a href="#">Back to Home page</a>
        </div>
        <input type="submit" value={"Login"} />
      </div>
    </div>
  );
}
