import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";
import PostComposer from "./components/PostComposer";
import Profile from './components/Profile';
import Userhome from './components/Userhome';
import SinglePost from "./components/SinglePost";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/userhome" element={<Userhome />} />
        <Route path="/create-post" element={<PostComposer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </Router>
  );
};

export default App;
