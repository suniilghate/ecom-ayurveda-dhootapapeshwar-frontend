import { useState, useEffect } from "react";
import products from "../../data/products";
import SkeletonCard from "./SkeletonCard";
import ProductCard from "./ProductCard";

import "./buyproduct.css";

const ITEMS_PER_PAGE = 8;

const BuyProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(products);
  }, []);
  
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container-fluid">
      <h4 className="mb-4 text-white">Products</h4>

      {/* Product Grid */}
      <div className="row g-4">
        {paginatedProducts.map((product) => {
          const discountedPrice = product.discount
            ? (
                product.price -
                (product.price * product.discount) / 100
              ).toFixed(2)
            : product.price.toFixed(2);

          return (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="product-card">
                {/* Discount Badge */}
                {product.discount > 0 && (
                  <span className="discount-badge">
                    {product.discount}% OFF
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />

                <div className="card-body d-flex flex-column">
                  <h6 className="product-title">{product.name}</h6>

                  <small className="text-muted mb-1">
                    {product.category}
                  </small>

                  {/* Price */}
                  <div className="price-section mb-2">
                    {product.discount > 0 ? (
                      <>
                        <span className="price-discounted">
                          ₹{discountedPrice}
                        </span>
                        <span className="price-original">
                          ₹{product.price.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="price-discounted">
                        ₹{product.price.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Status */}
                  <span
                    className={`status-badge mb-2 ${
                      product.status === "Active" ? "active" : "inactive"
                    }`}
                  >
                    {product.status}
                  </span>

                  {/* Add to Cart */}
                  <button
                    className="btn btn-sm btn-primary mt-auto"
                    disabled={product.status !== "Active" || product.quantity === 0}
                    onClick={() => console.log("Add to cart:", product)}
                  >
                    {product.quantity === 0 ? "Out of Stock" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <ul className="pagination mb-0">
            <li className={`page-item ${currentPage === 1 && "disabled"}`}>
              <button
                className="page-link bg-transparent text-white"
                onClick={() => goToPage(currentPage - 1)}
              >
                Prev
              </button>
            </li>

            {Array.from({ length: totalPages }).map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 && "active"
                }`}
              >
                <button
                  className="page-link bg-transparent text-white"
                  onClick={() => goToPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === totalPages && "disabled"
              }`}
            >
              <button
                className="page-link bg-transparent text-white"
                onClick={() => goToPage(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BuyProduct;
