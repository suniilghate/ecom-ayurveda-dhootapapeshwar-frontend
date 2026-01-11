import "./forgotPassword.css";

const ForgotPassword = () => {
  return (
    <main className="container d-flex flex-column">
      <div className="row align-items-center justify-content-center min-vh-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-4">
          <div className="auth-card">
            <img
              src="/SDL_INDEX.png"
              alt="Logo"
              className="mb-3"
              style={{ maxWidth: "140px" }}
            />

            <p className="auth-description">
              Don't worry, we'll send you an email to reset your password.
            </p>

            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="d-grid mb-3">
                <button className="btn btn-primary">
                  Reset Password
                </button>
              </div>

              <span className="auth-link auth-helper-text">
                Don't have an account?{" "}
               <a href="/login">Sign In</a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
