const ProductCard = ({ product }) => {
  return (
    <div className="col">
      <div className="card product-card h-100 position-relative">

        {/* Status Badge */}
        {product.status && (
          <span className="badge bg-danger position-absolute top-0 start-0 m-2">
            {product.status}
          </span>
        )}

        {/* Discount Tag */}
        {product.discount > 0 && (
          <span className="badge bg-success position-absolute top-0 end-0 m-2">
            {product.discount}% OFF
          </span>
        )}

        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
        />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{product.name}</h6>
          <small className="text-muted">{product.category}</small>

          <div className="mt-auto">
            <h6 className="fw-bold mt-2">₹{product.price}</h6>
            <button className="btn btn-outline-light w-100 mt-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;