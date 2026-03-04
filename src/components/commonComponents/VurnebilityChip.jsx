import React from "react";

const VurnebilityChip = ({ data }) => {
  return (
    <div className="vurnebility-chip">
      {data?.map((el, i) => {
        return <div key={i} className="chip">{el}</div>;
      })}
    </div>
  );
};

export default VurnebilityChip;
