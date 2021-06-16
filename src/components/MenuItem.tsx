import React from "react";

const MenuItem = ({ children }: any) => {
  return (
    <h1
      style={{      
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "17px",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        opacity: "0.5",
        position: "absolute",
        width: "160px",
        height: "24px",
        left: "calc(50% - 160px/2 - 570px)",
        top: "96px"
              }}
    >
      {children}
    </h1>
  );
};

export default MenuItem;
