import React, { useState } from "react";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";

import InputControl from "../InputControl/InputControls";
import { auth } from "../Firebase/firebase";
import "./Register.css";


function Register() {


    const [values, setValues] = useState ({
        name: "",
        email: "",
        number: "",
        pass: "",
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);


    const handleSubmission = () => {
        if ( !values.name || !values.email || !values.number || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");


        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword (auth, values.email, values.pass)
        .then((res) =>{
            setSubmitButtonDisabled (false);
            const user = res.user;
            console.log(user);
        })

       .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
       });
    }




  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Register </h1>

        <InputControl 
        label="Name" 
        placeholder=" Enter your Name" 
        onChange = {(event) =>
         setValues((prev) => ({ ...prev, name: event.target.value}))
        }
        />
        <InputControl 
        label="Email" 
        placeholder=" Enter Email" 
        onChange = {(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value}))
        }
        />
        <InputControl 
        label="Phone Number"
         placeholder=" Enter your Phone Number" 
         onChange = {(event) =>
            setValues((prev) => ({ ...prev, number: event.target.value}))
        }
        />
        <InputControl 
        label="Password" 
        placeholder=" Enter Password" 
        onChange = {(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value}))
        }
        />
        <InputControl 
        label="Confirm Password" 
        placeholder=" Confirm your Password" 
        onChange = {(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value}))
        }
        />

        <div className="footer">
            <b className="error">{errorMsg}</b>
          <button onClick={handleSubmission} disabled = {submitButtonDisabled}>
            Create Account
            </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login.</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
