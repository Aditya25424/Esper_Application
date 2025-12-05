import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";
import PostComposer from "./components/PostComposer";
import Profile from './components/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />
        <Route path="/create-post" element={<PostComposer />} />
             <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
