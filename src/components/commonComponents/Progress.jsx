import React from "react";

const Progress = ({ percentage }) => {
  return (
    <div className="progress-sec">
      <div className="progress-bar">
        <div className={`active-bar ${percentage < 15 ? 'low' : ''}`} style={{ width: `${percentage}%` }}></div>
      </div>
      <span className="percent-txt">{percentage}%</span>
    </div>
  );
};

export default Progress;
