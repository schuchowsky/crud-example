import React from "react";
// import Bellicon from "../assets/bellicon.svg";

const Notifications = ({ children }: any) => {
  return (
    <div
      style={{
        border: "1px solid #FFFFFF",
        boxSizing: "border-box",
      }}
    >
      <img src={""} alt="Notificar" />
      {children}
    </div>
  );
};

export default Notifications;
