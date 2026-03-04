import React from "react";

const StatusChip = ({ text }) => {
  return <div className={`status-chip ${text || ""}`}>{text}</div>;
};

export default StatusChip;
