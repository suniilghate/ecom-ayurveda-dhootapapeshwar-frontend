import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dashboard-wrapper">
      <Header />

      <div className="dashboard-body">
        <Sidebar />
        <main className="dashboard-content"> 
          {/* 🔥 THIS IS REQUIRED */}
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
