import React from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

const DashboardCard = ({
  title,
  percent,
  icon,
  subtext,
  iconColor,
  status,
  countType
}) => {
  return (
    <div className="dashbaord-analytic-card">
      <div className="card-sec1">
        <h5>{title}</h5>{" "}
        <span className={`icon-sec ${iconColor || ""}`}>{icon}</span>
      </div>
      <div className="card-sec2">
        <h4>{percent}</h4>{" "}
        <span className={`${status || ""}`}>
          {countType == "UP" ? <FaLongArrowAltUp /> : <FaLongArrowAltDown />}
          {subtext}
        </span>
      </div>
    </div>
  );
};

export default DashboardCard;
