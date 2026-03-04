import React from "react";
import { MdOutlineHome } from "react-icons/md";
import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();  
  return (
    <div className="bread-crumb">
      <span>
        {" "}
        <h3>{location.pathname.split("/")}</h3> <MdOutlineHome size={20} />&nbsp;
        {location.pathname}
      </span>
    </div>
  );
};

export default BreadCrumbs;
