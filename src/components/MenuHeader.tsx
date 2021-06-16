import React from "react";

const MenuHeader = ({ children }: any) => {
  return (
    <h1
      style={{
        background:"#252451",
        position: "absolute",
        width: "272px",
        height: "72px",
        left: "8px",
        top: "130px",
        color: "#fff",
        textAlign: "center",
        padding: "15px 0 0 0"
      }}
    >
      {children}
    </h1>
  );
};

export default MenuHeader;
