import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button 
    
    onClick={onClick}
    style={{
      backgroundColor: "#434275",
      boxShadow: "0px 2px 4px rgba(109, 108, 147, 0.4)",
      borderRadius: "8px",
    }}>
      {label}
    </button>
  )
};

export default Button;

