import React from "react";

const ApsLogo = ({ textColor }) => {
  return (
    <div className="aps-logo">
      <div className="icon"></div>
      <span
        className="logo-txt"
        style={{ ...(textColor && { color: textColor }) }}
      >
        aps
      </span>
    </div>
  );
};

export default ApsLogo;
