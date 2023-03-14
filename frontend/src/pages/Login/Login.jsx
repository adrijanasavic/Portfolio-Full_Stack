import React, { useState } from "react";
import "./Login.css";
import LoginService from "../../services/loginService"
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValidForm, setIsValidForm] = useState(true);
  const navigate = useNavigate();
  const [message, setMessage] = useState("")

  const onUsernameChange = (e) => setUsername(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const dispatch = useDispatch();
  
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setIsValidForm(false);
      return;
    }
    setIsValidForm(true);

    let body = { username: username, password: password };

    LoginService.login(body)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          localStorage.setItem("user", JSON.stringify(res.data));
          dispatch(setUser(res.data));
          navigate("/dashboard")
        } else {
        setMessage("User not found!")
        console.log("User not found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="box" onSubmit={onSubmitForm} method="post">
      <div className="box__form">
        <h2>Login</h2>
        <div className="box__form--input-box">
          <input
            type="text"
            id="username"
            name="username"
            placeholder=""
            required="required"
            onInput={onUsernameChange}
          />
          <label htmlFor="usename">Username</label>
          <i></i>
        </div>
        <div className="box__form--input-box">
          <input
            type="password"
            id="password"
            name="password"
            placeholder=""
            required="required"
            onInput={onPasswordChange}
          />
          <label htmlFor="password">Password</label>
          <i></i>
        </div>
        <div className="box__form--link">
          <Link to="/">Back to Home page</Link>
        </div>
        {message}
        <input type="submit" value={"SEND"} />
      </div>
    </form>
  );
}
