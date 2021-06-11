import React from "react";


const Table = () => {
  return (
   <table>
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

