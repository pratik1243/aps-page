import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={`page-content ${darkTheme ? "dark" : ""}`}>
      <Navbar setOpenSideBar={setOpenSideBar} setDarkTheme={setDarkTheme} />
      <Sidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <div className="main-content">
        <Outlet />{" "}
      </div>
    </div>
  );
};

export default Layout;
