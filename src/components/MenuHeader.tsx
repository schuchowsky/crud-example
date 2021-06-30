import React from "react";
import Vector1 from "../assets/Vector1.svg";
import Vector2 from "../assets/Vector2.svg";
import Vector3 from "../assets/Vector3.svg";
import Vector4 from "../assets/Vector4.svg";

const MenuHeader = ({ children }: any) => {
  return (
    <h1
      style={{
        background: "#252451",
        position: "absolute",
        width: "272px",
        height: "72px",
        left: "8px",
        top: "450px",
        color: "#fff",
        textAlign: "center",
        padding: "15px 0 0 0",
      }}
    >
      {children}
      <section
        style={{
          display: "inline-block",
          justifyContent: "center",
          padding: "0 0 0 10px",
        }}
      >
        <div style={{ width: "22px", height: "22px" }}>
          <img src={Vector1} alt="Vector 1" />
          <img src={Vector3} alt="Vector 3" />
        </div>
        <div>
          <img src={Vector2} alt="Vector 2" />
          <img src={Vector4} alt="Vector 4" />
        </div>
      </section>
    </h1>
  );
};

export default MenuHeader;
