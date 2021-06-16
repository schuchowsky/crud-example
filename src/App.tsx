import React, { useState } from "react";
import Button from "./components/Button";
import Title from "./components/Title";
import MenuHeader from "./components/MenuHeader";
import MenuItem from "./components/MenuItem";
import Header from "./components/Header";
import Menu from "./components/Menu"; import SearchInput from "./components/SearchInput";
import Avatar from "./components/Avatar";
import Notifications from "./components/Notifications";
import Table from "./components/Table";

function App() {
const [search, setSearch] = useState("");
const [text, setText] = useState("");

  return (
      <div className="App">
        <Header />  
        <Menu />
        <MenuHeader>Supremo</MenuHeader>
        <MenuItem>Agendamento</MenuItem>
        <Title>Hello world!</Title>
        {/* <SearchInput placeholder="Pesquisar por professor" value={search} onChange={(value) => setSearch(value) } />  */}
        <SearchInput placeholder="Pesquisar por professor" value={search} onChange={(e) => setSearch(e.target.value) } /> 
        {/* <Button label="Novo Professor" onClick={() => alert("Clicou no botão")} />  */}
        <Button label="Novo Professor" onClick={(value) => setText(valeu)} /> 
        
        <Avatar />
        <Notifications />
        <Table />
      </div>
    ) 
}

export default App;
