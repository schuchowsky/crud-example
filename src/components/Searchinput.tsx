import React from "react";
import vector from "../assets/Vector.svg";

interface SearchinputProps {
  value:{value},
  onChange: () => return;
}

const Searchinput = ({ value, onChange }: SearchinputProps ) => {
  return (
    <div>
      <input
        style={{
          backgroundColor: "#F9F9FA",
          mixBlendMode: "normal",
          border: "1px solid #B7C1C5",
          boxSizing: "border-box",
          borderRadius: "20px",
          left: "calc(50 % - 336px / 2 - 248px)",
        }}
        type="text" value={value} onChange={SearchinputProps} placeholder="Pesquisa por professor..........." />
      <img src={vector}  alt="Pesquisar" />  
    </div >
  );
};

export default Searchinput;



  