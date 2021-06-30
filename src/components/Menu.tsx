import React from "react";

const Menu = ({ children }: any) => {
  return (
    <div
      style={{
        backgroundColor: "#2A285B",
        width: "272px",
        height: "500px",
        // left: "0px",
        // top: "0px",
      }}
    >
      {children}
    </div>
  );
};

export default Menu;
