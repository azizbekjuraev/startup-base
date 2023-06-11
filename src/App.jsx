import React, { useState } from "react";
import Login from "../src/components/Login/Login";
import "../src/components/Login/login.css";

import UserProfile from "./components/UserProfile/UserProfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
