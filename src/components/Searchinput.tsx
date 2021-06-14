import React from "react";
import vector from "../assets/Vector.svg";

interface SearchInputProps {
  value: string;
  onChange: () => string; 
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
return (
    <div>
      <input
        onChange={(e) => alert(e.target.value)}
        type="search"  
          placeholder="Pesquisa por professor..........."
        style={{
          backgroundColor: "#F9F9FA",
          mixBlendMode: "normal",
          border: "1px solid #B7C1C5",
          boxSizing: "border-box",
          borderRadius: "20px",
          left: "calc(50 % - 336px / 2 - 248px)",
               
         }} />
         {value}
      <img src={vector}  alt="Pesquisar" />  
    </div >
  );
};

export default SearchInput;



  