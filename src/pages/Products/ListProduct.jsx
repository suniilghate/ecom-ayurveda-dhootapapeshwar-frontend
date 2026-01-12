import { useState } from "react";
import products from "../../data/products";
//import DashboardLayout from "../../layouts/DashboardLayout";
import "../Products/listproduct.css";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 5;

const ListProduct = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Product deleted");
      setProducts(products.filter(p => p._id !== id));

    } catch {
      toast.error("Delete failed");
    }
  };


  return (
    <>
      <div className="container-fluid">
        {/* Header */}
        <div className="mb-4">
          <h3 className="mb-0">Products</h3>
        </div>

        <div className="card product-list-container">
          {/* Card Header */}
          <div className="card-header d-flex justify-content-between">
            <a href="/dashboard/products/add" className="btn btn-primary">
              + Add Product
            </a>

            <div>
              <button className="btn btn-outline-secondary btn-sm me-2">
                Import
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                Export
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-centered text-nowrap product-list-container">
                <thead className="table-light">
                  <tr>
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Added Date</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {currentProducts.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <input type="checkbox" />
                      </td>

                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="rounded me-3"
                            width="60"
                          />
                          <div>
                            <h6 className="mb-0">{product.name}</h6>
                            <div className="text-warning">
                              {"★".repeat(product.rating)}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>{product.category}</td>
                      <td>{product.date}</td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>

                      <td>
                        <span
                          className={`badge ${
                            product.status === "Active"
                              ? "bg-success"
                              : "bg-danger"
                          }`}
                        >
                          {product.status}
                        </span>
                      </td>

                      <td>
                        <button className="btn btn-sm btn-outline-primary me-2">
                          View
                        </button>
                        <button className="btn btn-sm btn-outline-primary me-2">
                          <Link
                            to={`/products/edit/${product._id}`}
                            className="btn btn-sm btn-primary"
                          >
                            Edit
                          </Link>
                        </button>
                        <button className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(product._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {products.length === 0 && (
                <p className="text-center mt-3">No products found</p>
              )}

              {/* Pagination */}
              <div className="d-flex gap-2">
                <button
                  className="btn btn-sm btn-secondary"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                >
                  Prev
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm ${
                      currentPage === index + 1 ? "btn-primary" : "btn-outline-primary"
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  className="btn btn-sm btn-secondary"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ListProduct;
