import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Title from "./components/Title";
import Header from "./components/Header";
import SearchInput from "./component/SearchInput";
import Avatar from "./components/Avatar";
import Notifications from "./components/Notifications";
import Table from "./components/Table";

function App() {
  const[search, setSearch] = useState();
  return (
      <div className="App">
        <Header />  
        <Title>Hello world!</Title>
        <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} /> 
        <Button label={"Novo Professor"} onClick={() => alert("Clicou no botão")} />
        <Avatar />
        <Notifications />
        <Table />
      </div>
    ) 
}

export default App;
