import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  // Auto-open menu based on URL
  useEffect(() => {
    if (location.pathname.includes("/dashboard/products")) {
      setOpenMenu("products");
    } else if (location.pathname.includes("/dashboard/orders")) {
      setOpenMenu("orders");
    } else {
      setOpenMenu(null);
    }
  }, [location.pathname]);

  return (
    <aside className="sidebar">
      <ul className="menu">
        <li className="menu-item">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
         {/* Products */}
        <li className={`menu-item ${openMenu === "products" ? "open" : ""}`}
         onClick={() => 
          setOpenMenu(openMenu === "products" ? null : "products")
        }>
          Products
          {openMenu === "products" && (
            <ul className="submenu">
              <li>
                <NavLink to="/dashboard/products/add">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/products/list">List Product</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/products/buy">Buy Product</NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Orders */}
        <li className={`menu-item ${openMenu === "orders" ? "open" : ""}`} 
          onClick={() => 
            setOpenMenu(openMenu === "orders" ? null : "orders")
        }>
          Orders
          {openMenu === "orders" && (
            <ul className="submenu">
              {/* <li>
                <NavLink to="/dashboard/orders/add">Add Order</NavLink>
              </li> */}
              <li>
                <NavLink to="/dashboard/orders/list">List Order</NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
