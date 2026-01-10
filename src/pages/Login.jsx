import { Link } from "react-router-dom"

const Login = () => {
  return (
    <main className="container d-flex flex-column">
      <div className="row align-items-center justify-content-center g-0 min-vh-100">
        <div className="col-12 col-md-8 col-lg-6 col-xxl-4 py-5">
          
          {/* Card */}
          <div className="card shadow-sm">
            <div className="card-body p-4 p-md-5">

              {/* Header */}
              <div className="mb-4 text-center">
                <h3 className="mb-2">Sign In</h3>
                <p className="text-muted">
                  Please enter your user information
                </p>
              </div>

              {/* Form */}
              <form>
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Username or Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="********"
                  />
                </div>

                {/* Remember Me */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                </div>

                {/* Links */}
                <div className="d-flex justify-content-between mt-4">
                  <Link to="/register" className="text-decoration-none">
                    Create an account
                  </Link>

                  <Link to="/forgot-password" className="text-decoration-none">
                    Forgot password?
                  </Link>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Login
