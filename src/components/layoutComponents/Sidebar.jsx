import React from "react";
import { HiOutlineBell } from "react-icons/hi";
import { PiInfoBold, PiSimCardBold } from "react-icons/pi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LuCalendarMinus2, LuClipboardCheck } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import ApsLogo from "../commonComponents/ApsLogo";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ openSideBar, setOpenSideBar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      icon: <MdOutlineDashboardCustomize size={20} />,
      text: "Dashboard",
      route: "dashboard",
    },
    {
      icon: <LuClipboardCheck size={19} />,
      text: "Projects",
      route: "",
    },
    {
      icon: <PiSimCardBold size={19} />,
      text: "Scans",
      route: "scan",
    },
    {
      icon: <LuCalendarMinus2 size={18} />,
      text: "Schedule",
      route: "",
    },
    {
      type: "divider",
    },
    {
      icon: <HiOutlineBell size={21} />,
      text: "Notifications",
      route: "",
    },
    {
      icon: <FiSettings size={19} />,
      text: "Settings",
      route: "",
    },
    {
      icon: <PiInfoBold size={21} />,
      text: "Support",
      route: "",
    },
  ];

  const handleRoute = (route) => {
    navigate(route);
  };

  return (
    <>
      {openSideBar && (
        <div className="backdrop" onClick={() => setOpenSideBar(false)}></div>
      )}
      <div className={`side-bar-section ${openSideBar ? "open" : ""}`}>
        <ApsLogo />
        <div className="menu-items-sec">
          {menuItems.map((ele, i) => {
            if (ele?.type === "divider") {
              return <hr />;
            }
            return (
              <div
                key={i}
                className={`side-bar-menu-item ${
                  location.pathname.slice(1) === ele?.route ? "active" : ""
                }`}
                onClick={() => {
                  handleRoute(`/${ele?.route}`);
                }}
              >
                <span>{ele.icon || ""}</span>
                <span className="side-menu-txt">{ele.text || ""}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
