import React, { useState } from "react";
import "./Login.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", 
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");
    localStorage.setItem("token", data.token);

  navigate("/home");
    alert("Login success!");
  } catch (err) {
    alert(err.message);
  }
};


  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Esper</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="register-text">
          Don’t have an account?{" "}
          <a href="/register" className="register-link">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
