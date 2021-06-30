import React from "react";

const Tag = ({ children }: any) => {
  return (
    <div
      style={{
        color: "#EAEAEF",
        borderRadius: "20px",
        border: "1px solid",
        width: "108px",
        height: "32px",
      }}
    >
      {children}
    </div>
  );
};

export default Tag;
