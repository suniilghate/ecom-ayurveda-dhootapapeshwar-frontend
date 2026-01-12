import { useState } from "react";
import { Link } from "react-router-dom";
import TermsModal from "../../components/TermsModal/TermsModal";
import { toast } from "react-toastify";
import "./register.css";

const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("terms");

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      toast.error("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Registration failed");
        return;
      }

      toast.success("Account created successfully");
      console.log("User:", data.user);

    } catch (error) {
      toast.error("Server error");
      console.error(error);
    }
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
                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
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
                      onChange={(e) =>
                        setForm({ ...form, confirmPassword: e.target.value })
                      }
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
