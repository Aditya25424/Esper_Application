import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState({});
  const [serverMsg, setServerMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setServerMsg("");
  };

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.username.trim() || form.username.length < 3)
      e.username = "Username must be at least 3 characters";
    if (!form.password || form.password.length < 6)
      e.password = "Password must be at least 6 characters";
    if (!form.email.match(/^\S+@\S+\.\S+$/))
      e.email = "Enter a valid email address";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setServerMsg("");

    try {
      const res = await fetch("/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const ct = res.headers.get("content-type") || "";
      const data = ct.includes("application/json") ? await res.json() : null;

      if (!res.ok) {
        // Backend can return {ok:false, message, fieldErrors?}
        if (data?.fieldErrors) setErrors((prev) => ({ ...prev, ...data.fieldErrors }));
        throw new Error(data?.message || `Registration failed (HTTP ${res.status})`);
      }

      // Success
      setServerMsg(data?.message || "Registration successful");
      alert("Registration successful! You can log in now.");
      navigate("/"); // go to Login
    } catch (err) {
      setServerMsg(err.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h1 className="register-title">Esper</h1>
        <h2 className="register-subtitle">Create Your Account</h2>

        {serverMsg && (
          <div className="alert" role="alert">{serverMsg}</div>
        )}

        <form className="register-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName" name="firstName" type="text"
            value={form.firstName} onChange={onChange}
          />
          {errors.firstName && <small className="error">{errors.firstName}</small>}

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName" name="lastName" type="text"
            value={form.lastName} onChange={onChange}
          />
          {errors.lastName && <small className="error">{errors.lastName}</small>}

          <label htmlFor="email">Email</label>
          <input
            id="email" name="email" type="email"
            value={form.email} onChange={onChange}
          />
          {errors.email && <small className="error">{errors.email}</small>}

          <label htmlFor="username">Username</label>
          <input
            id="username" name="username" type="text"
            value={form.username} onChange={onChange}
          />
          {errors.username && <small className="error">{errors.username}</small>}

          <label htmlFor="password">Password</label>
          <input
            id="password" name="password" type="password"
            value={form.password} onChange={onChange}
          />
          {errors.password && <small className="error">{errors.password}</small>}

          <button type="submit" className="register-btn" disabled={submitting}>
            {submitting ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="login-text">
          Already have an account? <a className="login-link" href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
