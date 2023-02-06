import React from "react";
import { Link } from "react-router-dom";
import InputControl from "../InputControl/InputControls";
import  "./Login.css";

function Login() {
  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Login</h1>

        <InputControl label ="Phone Number" placeholder =" Enter your Phone number"  required />
        <InputControl label ="Password" placeholder =" Enter Password" required/>

        <div className="footer">
            <button>Login</button>
            <span class="psw">Forgot <a href="#">Password?</a></span>
            <p>
                Don't have an account? {" "}
                <span>
                    <Link to="/register">Register.</Link>
                </span>
            </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
