import React from "react";

const Button = ({
  text,
  color,
  icon,
  outlined,
  fullwidth,
  roundEdges,
  textColor,
  onClick = null,
}) => {
  return (
    <button
      onClick={onClick && onClick}
      className={`button  ${fullwidth ? "full" : ""}`}
      style={{
        ...(outlined
          ? {
              border: `1px solid ${color}`,
              ...(textColor && { color: textColor }),
            }
          : color
          ? { background: color, ...(textColor && { color: textColor }) }
          : {}),
        ...(roundEdges && { borderRadius: `${roundEdges}px` }),
      }}
    >
      {icon || ""} {text || ""}
    </button>
  );
};

export default Button;
