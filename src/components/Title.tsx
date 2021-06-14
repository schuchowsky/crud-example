import React from "react";

const Title = ({ children }: any) => {
  return (
    <h1
      style={{
        color: "#2F2D66",
        fontFamily: "inter",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "22px",
      }}
    >
      {children}
    </h1>
  );
};

export default Title;
