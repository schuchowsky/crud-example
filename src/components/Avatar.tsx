import React from "react";
import Perfil from "../assets/Perfil.svg";

const Avatar = ({ children }: any) => {
  return (
    <div
      style={{
        border: "1px solid #FFFFFF",
        boxSizing: "border-box",
      }}
    >
      <img src={Perfil} alt="Avatar" />
      {children}
    </div>
  );
};

export default Avatar;
