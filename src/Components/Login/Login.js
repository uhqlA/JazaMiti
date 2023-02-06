import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";

import InputControl from "../InputControl/InputControls";
import { auth } from "../Firebase/firebase";
import  "./Login.css";

function Login() {

  const navigate = useNavigate ();
  const [values, setValues] = useState ({

      email: "",
      pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);


  const handleSubmission = () => {
      if ( !values.email || !values.pass) {
          setErrorMsg("Fill all fields");
          return;
      }
      setErrorMsg("");


      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword (auth, values.email, values.pass)
      .then(async(res) =>{
          setSubmitButtonDisabled (false);
          // const user = res.user;
          // await updateProfile(user, {
          //     displayName: values.name,
          // });
          navigate("/");
          
      })

     .catch((err) => {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
     });
  }



  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Login</h1>

        <InputControl label ="Phone Number"
        onChange = {(event) =>
        setValues ((prev) => ({...prev, email:event.target.value}))
      }
        placeholder =" Enter your Phone number"   />
        <InputControl label ="Password" 
         onChange = {(event) =>
          setValues ((prev) => ({...prev, pass:event.target.value}))
        }
        placeholder =" Enter Password" />

        <div className="footer">
          <b className="error">{errorMsg}</b>
            <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
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
