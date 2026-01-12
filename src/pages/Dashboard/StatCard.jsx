export default function StatCard({
  title,
  value,
  trend,
  trendType,
  linkText
}) {
  return (
    <div className="col mb-5 ">
      <div className="card h-100 card-lift statcard">
        <div className="card-body">

          <div className="d-flex justify-content-between">
            <span className="text-muted fw-semi-bold">{title}</span>
          </div>

          <div className="mt-4 d-flex align-items-center">
            <h3 className="fw-bold mb-0">{value}</h3>

            {trend && (
              <span
                className={`ms-2 small ${
                  trendType === "up" ? "text-success" : "text-danger"
                }`}
              >
                {trendType === "up" ? "↑" : "↓"} {trend}
              </span>
            )}
          </div>

          <a href="#!" className="btn-link fw-semi-bold">
            {linkText}
          </a>

        </div>
      </div>
    </div>
  );
}
