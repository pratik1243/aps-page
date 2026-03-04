import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import Button from "../commonComponents/Button";
import { MdOutlineMenuOpen, MdOutlineModeNight } from "react-icons/md";

const Navbar = ({ setOpenSideBar, setDarkTheme }) => {
  return (
    <div className="navbar-section">
      <div
        role="button"
        className="side-menu-open-btn"
        onClick={() => {
          setOpenSideBar((prev) => !prev);
        }}
      >
        <MdOutlineMenuOpen />
      </div>
      <BreadCrumbs />

      <div className="nav-btn-sec">
        <label className="dark-theme-switch">
          <span className="dark-mode-txt">Dark Mode</span>
          <input
            type="checkbox"
            onChange={(e) => setDarkTheme((prev) => !prev)}
          />
          <span className="slider round">            
          </span>
        </label>
        <Button
          outlined
          color={"#9d9898"}
          textColor={"#9d9898"}
          text={"Export Report"}
          roundEdges={5}
        />

        <Button
          color={"#fdecec"}
          textColor={"#ef4444"}
          text={"Stop Scan"}
          roundEdges={5}
        />
      </div>
    </div>
  );
};

export default Navbar;
