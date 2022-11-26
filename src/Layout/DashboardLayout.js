import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Header/NavBar";

const DashboardLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Order</Link>
            </li>
            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
            <li>
              <Link to="/dashboard/addproduct">Add Product</Link>
            </li>
            <li>
              <Link to="/dashboard/allseller">All Seller</Link>
            </li>
            <li>
              <Link to="/dashboard/allbuyer">All Buyer</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
