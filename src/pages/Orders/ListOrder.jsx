import { useState } from "react";
import orders from "../../data/order";
import "../Orders/listorder.css";

const ITEMS_PER_PAGE = 5;

const ListOrder = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentOrders = orders.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="container-fluid">
      {/* Page Header */}
      <div className="mb-4">
        <h3 className="mb-0">Orders</h3>
      </div>

      {/* Card */}
      <div className="card bg-[#1e293b] text-gray-200">
        <div className="card-header bg-transparent border-bottom border-gray-700">
          <div className="row align-items-center">
            <div className="col-md-3">
              <input
                type="search"
                className="form-control bg-transparent text-white border-gray-600"
                placeholder="Search orders..."
              />
            </div>

            <div className="col-md-4 d-flex align-items-center mt-3 mt-md-0">
              <label className="me-2 mb-0">Status</label>
              <select className="form-select bg-transparent text-white border-gray-600 status-dropdown">
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>

            <div className="col-md-5 text-md-end mt-3 mt-md-0">
              {/* <button className="btn btn-primary me-2">+ Add New Order</button> */}
              <button className="btn btn-outline-light">Export</button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-dark-custom table-hover mb-0">
            <thead className="text-gray-400 border-bottom border-gray-700">
              <tr>
                <th>Order ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Payment</th>
                <th>Total</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {currentOrders.map((order, index) => (
                <tr key={index} className="hover:bg-[#334155]">
                  <td>{order.id}</td>
                  <td>{order.name}</td>
                  <td>{order.date}</td>
                  <td>
                    <span
                      className={`badge ${
                        order.paymentStatus === "Paid"
                          ? "bg-success"
                          : "bg-secondary"
                      }`}
                    >
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>
                    <span className="badge bg-info text-dark">
                      {order.orderStatus}
                    </span>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-sm btn-ghost"
                        data-bs-toggle="dropdown"
                      >
                        ⋮
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <button className="dropdown-item">View</button>
                        </li>
                        <li>
                          <button className="dropdown-item">Edit</button>
                        </li>
                        <li>
                          <button className="dropdown-item text-danger">
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center p-3 border-top border-gray-700">
          <span>
            Showing {startIndex + 1}–
            {Math.min(startIndex + ITEMS_PER_PAGE, orders.length)} of{" "}
            {orders.length}
          </span>

         <ul className="pagination pagination-dark mb-0 justify-content-end">
          {/* Prev */}
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
          </li>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;

            return (
              <li
                key={page}
                className={`page-item ${currentPage === page ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              </li>
            );
          })}

          {/* Next */}
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>

        </div>
      </div>
    </div>
  );
};

export default ListOrder;
