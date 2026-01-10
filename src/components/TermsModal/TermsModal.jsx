import "./termsModal.css";

const TermsModal = ({ show, onClose, type }) => {
  if (!show) return null;

  return (
    <div className="custom-modal-backdrop">
      <div className="custom-modal-wrapper">
        <div className="custom-modal-header">
          <h5 className="custom-modal-title">
            {type === "terms" ? "Terms of Service" : "Privacy Policy"}
          </h5>
          <button className="custom-modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="custom-modal-body">
          {type === "terms" ? (
            <>
              <p>
                These Terms govern your access and use of our application.
              </p>
              <p>
                You agree not to misuse the service, attempt unauthorized access,
                or violate applicable laws.
              </p>
              <p>
                We reserve the right to suspend accounts violating policies.
              </p>
            </>
          ) : (
            <>
              <p>
                Your privacy is important to us. We collect only necessary data.
              </p>
              <p>
                Personal information is never shared without consent.
              </p>
              <p>
                We implement industry-standard security practices.
              </p>
            </>
          )}
        </div>

        <div className="custom-modal-footer">
          <button className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
