import React from "react";

const LogCard = ({ severity, title, api, subtext }) => {
  return (
    <div className="log-card">
      <div className={`serverity-chip ${severity || ""}`}>{severity}</div>
      <h3>{title}</h3>
      <span>{api}</span>
      <p>{subtext}</p>
    </div>
  );
};

export default LogCard;
