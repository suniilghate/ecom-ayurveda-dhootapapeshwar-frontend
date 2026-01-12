export default function RecentOrders() {
  return (
    <div className="card h-100 recent-order-div">
      <div className="card-header">
        <h4 className="mb-0">Recent Orders</h4>
      </div>

      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="recent-order-tbl table table-centered text-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Vendor</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#DU0007</td>
                <td>Michell Forge</td>
                <td>Headphone</td>
                <td className="text-success">$99.00</td>
                <td>DollarSmart</td>
                <td>
                  <span className="badge badge-success-soft text-success">
                    Paid
                  </span>
                </td>
              </tr>

              <tr>
                <td>#DU0006</td>
                <td>Judy Huston</td>
                <td>Beauty Lips</td>
                <td className="text-success">$399.00</td>
                <td>Snail Bouque</td>
                <td>
                  <span className="badge badge-success-soft text-success">
                    Paid
                  </span>
                </td>
              </tr>

              <tr>
                <td>#DU0005</td>
                <td>Olivier Tassi</td>
                <td>Lady Bag</td>
                <td className="text-success">$729.00</td>
                <td>Cartmax</td>
                <td>
                  <span className="badge badge-danger-soft text-danger">
                    Cancel
                  </span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
