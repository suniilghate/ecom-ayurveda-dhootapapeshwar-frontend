import { useState } from "react";
import "./forgotPassword.css";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!email.includes("@")) {
      toast.warning("Invalid email address");
      return;
    }
    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/user/forgot-password",
        { email }
      );

      toast.success(res.data.message || "Reset link sent");
      setEmail("");

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

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

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
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
