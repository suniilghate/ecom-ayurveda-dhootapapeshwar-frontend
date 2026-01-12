import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const { dispatch } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      toast.error("Email and Password are required");
      return;
    }

    if (!form.email.includes("@")) {
      toast.warning("Please enter a valid email");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: res.data.user,
          token: res.data.token,
        },
      });

      toast.success(res.data.message || "Login successful");

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Invalid credentials"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <div className="login-card card smooth-shadow-md">
        <div className="card-body">
          <div className="mb-4">
            <a href="/">
              <img src="/SDL_INDEX.png" alt="Logo" />
            </a>
            <p>Please enter your user information.</p>
          </div>

          <form onSubmit={handleSubmit}> 
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Username or email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email address here"
                required
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="**************"
                required
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                id="rememberme"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="rememberme">
                Remember me
              </label>
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
            
            <div className="d-flex justify-content-between">
              <a href="/register" className="fs-6 login-title">
                Sign Up
              </a>
              <a href="/forgot-password" className="fs-6 forgot-password">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
