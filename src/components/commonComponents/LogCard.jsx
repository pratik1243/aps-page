import React from "react";

const LogCard = ({ severity, title, api, subtext }) => {
  return (
    <div className="log-card">
      <div className={`serverity-chip ${severity || ""}`}>{severity}</div>
      <h3>{title}</h3>
      <a>{api}</a>
      <p>{subtext}</p>
    </div>
  );
};

export default LogCard;
