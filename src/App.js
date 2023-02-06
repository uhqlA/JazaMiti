import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import './App.css';
import { auth } from './Components/Firebase/firebase';

function App() {
  const [userName, setUserName ] = useState("");


  useEffect(() => {
  auth.onAuthStateChanged((user) => {
    if (user){
     setUserName(user.displayName);
    console.log(user);
    }else setUserName ("");
  })
  }, [])

  return (
    <div>
      <Router>
        <Routes>
        <Route path = "/" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
          <Route path = "/home" element = {<Home name= {userName} />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
