import React, { useState } from "react";

const TextField = ({
  label,
  placeholder,
  type = "text",
  passwordIcon,
  width
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="input-sec">
      {label && <label>{label}</label>}
      <input
        style={{ ...(width && { width: `${width}%` }) }}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
      />
      {passwordIcon && (
        <div
          role="button"
          className="icon-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          {passwordIcon(showPassword)}
        </div>
      )}
    </div>
  );
};

export default TextField;
