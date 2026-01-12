import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => setFormData(res.data))
    .catch(() => toast.error("Failed to load product"));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleUpdate = async () => {
    try {
      const data = new FormData();

      Object.keys(formData).forEach(key => {
        data.append(key, formData[key]);
      });

      images.forEach(img => data.append("images", img));

      await axios.put(
        `http://localhost:5000/api/products/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Product updated");
      navigate("/products");

    } catch {
      toast.error("Update failed");
    }
  };

  return (
    <button className="btn btn-primary" onClick={handleUpdate}>
      Update Product
    </button>
  );
};

export default EditProduct;
