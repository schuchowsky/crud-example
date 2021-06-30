import React from "react";

import Icon from "../assets/Toggle.svg";

interface ToggleProps {
  onClick: () => void;
}

const Toggle = ({ onClick }: ToggleProps) => {
  return (
    <div
      onClick={onClick}
      style={{ 
        backgroundColor: "#434275",
        mixBlendMode: "normal",
        border: "1px solid #434275",
        boxSizing: "border-box",
        borderRadius: "20px",
        width: "40px",
        height: "24px",
      }}
    >
      <span
        style={{
          backgroundColor: "#fff",
          mixBlendMode: "normal",
          borderRadius: "20px",
        }}
      >
        <img src={Icon} alt="" />
      </span>
    </div>
  );
};

export default Toggle;
