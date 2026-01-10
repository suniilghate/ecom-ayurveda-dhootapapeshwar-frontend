import React from "react";
import "./login.css";

const Login = () => {
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

          <form>
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
