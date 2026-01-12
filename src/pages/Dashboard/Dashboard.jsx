import StatCard from "./StatCard";
import RecentOrders from "./RecentOrders";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="container-fluid">

      {/* Header */}
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h3 className="mb-0">Shree Dhootapapeshwar Limited</h3>
            <button className="btn btn-primary">Add Product</button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">

        <StatCard
          title="Orders"
          value="5,312"
          trend="-2.29%"
          trendType="down"
          linkText="View Orders"
        />

        <StatCard
          title="Revenue"
          value="$8,312"
          trend="+2.29%"
          trendType="up"
          linkText="View Earnings"
        />

        <StatCard
          title="Customers"
          value="15,312"
          trend="+5.16%"
          trendType="up"
          linkText="All Customers"
        />

        <StatCard
          title="Balance"
          value="$35.64k"
          linkText="Withdraw Money"
        />

      </div>

      {/* Orders Table */}
      <div className="row">
        <div className="col-lg-6 mb-5">
          <RecentOrders />
        </div>
      </div>

    </div>
  );
}
