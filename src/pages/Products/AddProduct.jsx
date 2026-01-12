import "./addproduct.css";
import { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    code: "",
    sku: "",
    gender: "Male",
    category: "Shoe",
    status: "Published",
    regularPrice: "",
    salePrice: "",
    inStock: true,
    includeTax: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    console.log("Product Data 👉", formData);
    alert("Product Created (check console)");
  };

  return (
    <div className="container-fluid add-product-page">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="mb-5">
            <h3 className="mb-0">Add Product</h3>
          </div>
        </div>
      </div>

      <div className="row">
        {/* LEFT */}
        <div className="col-lg-8 col-12">
          {/* Product Info */}
          <div className="card mb-4 product-info">
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Product Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Enter Product Title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="form-label">Product Description</label>
                <div className="editor-wrapper">
                  {/* keep your Quill editor here */}
                  <textarea
                    className="form-control"
                    rows="6"
                    name="description"
                    placeholder="Enter product description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="card mb-4 product-gallery">
            <div className="card-body">
              <h4 className="mb-4">Product Gallery</h4>

              <div className="mb-4">
                <input type="file" className="form-control mb-3" />
                <input type="file" className="form-control" multiple />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-lg-4 col-12">
          {/* Stock */}
          <div className="card mb-4">
            <div className="card-body card-stock">
              <div className="form-check form-switch mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="inStock"
                  checked={formData.inStock}
                  onChange={handleChange}
                />
                <label className="form-check-label">In Stock</label>
              </div>

              <div className="mb-3">
                <label className="form-label">Product Code</label>
                <input
                  type="text"
                  name="code"
                  className="form-control"
                  value={formData.code}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Product SKU</label>
               <input
                  type="text"
                  name="sku"
                  className="form-control"
                  value={formData.sku}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Gender</label><br />
                {["Male", "Female", "Kids"].map((g) => (
                  <div className="form-check form-check-inline" key={g}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value={g}
                      checked={formData.gender === g}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">{g}</label>
                  </div>
                ))}
              </div>

              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  name="category"
                  className="form-select"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option>Shoe</option>
                  <option>Sunglasses</option>
                  <option>Handbag</option>
                  <option>Slingbag</option>
                </select>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="card mb-4 card-status">
            <div className="card-body">
              <div className="mb-3">
                 <label className="form-label">Status</label>
                <select
                  name="status"
                  className="form-select"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option>Published</option>
                  <option>Unpublished</option>
                  <option>Draft</option>
                </select>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="card mb-4 card-price">
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Regular Price</label>
                <input
                  type="number"
                  name="regularPrice"
                  className="form-control"
                  value={formData.regularPrice}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Sale Price</label>
                <input
                  type="number"
                  name="salePrice"
                  className="form-control"
                  value={formData.salePrice}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="d-grid">
           <button className="btn btn-primary" onClick={handleSubmit}>
              Create Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
