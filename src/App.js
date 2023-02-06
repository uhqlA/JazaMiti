import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"


import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
          <Route path = "/" element = {<Home />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
