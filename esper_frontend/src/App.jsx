import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";
import PostComposer from "./components/PostComposer";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Page (default) */}
        <Route path="/" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* Home/Dashboard Page */}
        <Route path="/home" element={<Home />} />
        <Route path="/create-post" element={<PostComposer />} />
      </Routes>
    </Router>
  );
};

export default App;
