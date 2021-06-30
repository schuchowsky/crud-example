import React from "react";
// import Agenda from "../assets/ageda.png";

const MenuItem = ({ children }: any) => {
  return (
    <h5
      style={{
        background: "#252451",
        position: "absolute",
        width: "272px",
        height: "72px",
        left: "8px",
        top: "550px",
        color: "#fff",
        textAlign: "center",
        padding: "15px 0 0 0",
      }}
    >
      {/* <img src={Agenda} alt="" /> */}
      {children}
    </h5>
  );
};

export default MenuItem;
