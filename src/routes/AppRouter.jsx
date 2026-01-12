import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";

// Products
import AddProduct from "../pages/Products/AddProduct";
import ListProduct from "../pages/Products/ListProduct";
import BuyProduct from "../pages/Products/BuyProduct";
import EditProduct from "../pages/Products/EditProduct";

// Orders
import AddOrder from "../pages/Orders/AddOrder";
import ListOrder from "../pages/Orders/ListOrder";



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Dashboard layout + nested routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* Default dashboard page */}
          <Route index element={<Dashboard />} />

          {/* Products */}
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/list" element={<ListProduct />} />
          <Route path="products/buy" element={<BuyProduct />} />
          <Route path="products/edit/:id" element={<EditProduct />} />

          {/* Orders */}
          <Route path="orders/add" element={<AddOrder />} />
          <Route path="orders/list" element={<ListOrder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
