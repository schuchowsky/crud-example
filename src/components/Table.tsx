import React from "react";


const Table = () => {
  return (
   <table style={{
    // position: "absolute",
    // width: "1104px",
    // height: "300px",
    // left: "304px",
    // top: "168px",
    // border: "1px solid"
   }}>
     <thead>
       <tr style={{
       background: "#fff",
       borderRadius: "8px 8px 0px 0px"
    }}
      >
         <th>NOME</th>
         <th>CONTATO</th>
         <th>DISCIPLINAS</th>
       </tr>
       </thead>
       <tbody>
         <tr>
           <td>Avatar</td>
           <td >Data 1 </td>
           <td >Data 1 </td>
           <td >Data 1 </td>
           <td>Editar</td>
           <td>Excluir</td>
         </tr>
       </tbody>
     </table>

  );
};

export default Table;

