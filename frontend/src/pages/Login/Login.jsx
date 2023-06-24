import React, { useState } from "react";
import "./Login.css";
import LoginService from "../../services/loginService"
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

export default function Login() {
  const dispatch = useDispatch();

  const [isValidForm, setIsValidForm] = useState(true);
  const navigate = useNavigate();
  const [message, setMessage] = useState("hidden")

  const [userCredentials, setUserCredentials] = useState({
    username: null,
    password:null
 })

  
  function handleChange(e){
    let copyUserCredentials = { ...userCredentials }
    copyUserCredentials[e.target.name] = e.target.value;
    setUserCredentials(copyUserCredentials)
  }
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!userCredentials.username || !userCredentials.password) {
      setIsValidForm(false);
      return;
    }
    setIsValidForm(true);


    LoginService.login(userCredentials)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          localStorage.setItem("user", JSON.stringify(res.data));
          dispatch(setUser(res.data));
          navigate("/dashboard")
        } else {
        setMessage("visible")
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
            onChange={((e) => { { handleChange(e) } })}
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
            onChange={((e) => { { handleChange(e) } })}
          />
          <label htmlFor="password">Password</label>
          <i></i>
        </div>
        <div className="box__form--link">
          <Link to="/">Back to Home page</Link>
        </div>
        <p style={{ visibility: message }}>User not found</p>
        <input type="submit" value={"SEND"} />
      </div>
    </form>
  );
}
