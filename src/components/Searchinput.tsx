import React from "react";
import vector from "../assets/Vector.svg";

interface SearchInputProps {
  value:string;
  onChange: (value: string ) => void; 
  placeholder: string;
}

const SearchInput = ({ value, onChange, placeholder }: SearchInputProps) => {
return (
    <div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="search"  
        placeholder={placeholder}
        style={{
          backgroundColor: "#F9F9FA",
          mixBlendMode: "normal",
          border: "1px solid #B7C1C5",
          boxSizing: "border-box",
          borderRadius: "20px",
          left: "calc(50 % - 336px / 2 - 248px)",      
         }} 
         /> 
         <img src={vector}  alt="Pesquisar" /> 
    </div >
  );
};

export default SearchInput;



  