import { Link } from "react-router-dom"
import "./login.css"

const Login = () => {
  return (
    <div className="login-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 col-xxl-4">

            <div className="card login-card shadow-sm">
              <div className="card-body p-4 p-md-5">

                <div className="mb-4 text-center">
                  <h3 className="mb-2">Sign In</h3>
                  <p className="text-muted">
                    Please enter your user information
                  </p>
                </div>

                <form>
                  <div className="mb-3">
                    <label className="form-label">
                      Username or Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="********"
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberMe"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Sign In
                    </button>
                  </div>

                  <div className="d-flex justify-content-between mt-4">
                    <Link to="/register">Create an account</Link>
                    <Link to="/forgot-password">Forgot password?</Link>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
