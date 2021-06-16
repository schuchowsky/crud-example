import React from "react";

const Header = ({ children }: any) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        width: "1168px",
        height: "144px",  
      }}
    >
      {children}
    </div>
  );
};

export default Header;
