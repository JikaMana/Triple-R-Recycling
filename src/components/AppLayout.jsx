import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="selection:">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
