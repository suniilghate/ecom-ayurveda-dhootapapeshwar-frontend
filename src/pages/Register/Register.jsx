import { useState } from "react";
import { Link } from "react-router-dom";
import TermsModal from "../../components/TermsModal/TermsModal";
import "./register.css";

const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("terms");

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  return (
    <>
      <main className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center min-vh-100">
          {/* Increased width */}
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            <div className="card register-card smooth-shadow-md">
              <div className="card-body p-4 p-md-5">
                {/* Header */}
                <div className="mb-4">
                  <Link to="/">
                    <img
                      src="/SDL_INDEX.png"
                      alt="Logo"
                      className="register-logo"
                    />
                  </Link>
                  <p className="text-muted mt-2">
                    Please enter your details to create an account.
                  </p>
                </div>

                {/* Form */}
                <form>
                  {/* Username */}
                  <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="********"
                      required
                    />
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="********"
                      required
                    />
                  </div>

                  {/* Terms */}
                  <div className="mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="termsCheck"
                        required
                      />
                      <label className="form-check-label" htmlFor="termsCheck">
                        I agree to the{" "}
                        <span
                          className="policy-link"
                          onClick={() => openModal("terms")}
                        >
                          Terms
                        </span> and  
                        <span
                          className="policy-link"
                          onClick={() => openModal("privacy")}
                        > &nbsp;
                           Privacy Policy
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Create Account
                    </button>
                  </div>

                  {/* Footer Links */}
                  <div className="d-flex justify-content-between mt-4">
                    <Link to="/login" className="auth-link login-title">
                      Already a member? Login
                    </Link>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Terms / Privacy Modal */}
      <TermsModal
        show={showModal}
        type={modalType}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Register;
