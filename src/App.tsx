import React, { useState, useCallback } from "react";
import Button from "./components/Button";
import Title from "./components/Title";
import MenuHeader from "./components/MenuHeader";
import MenuItem from "./components/MenuItem";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SearchInput from "./components/SearchInput";
import Avatar from "./components/Avatar";
import Notifications from "./components/Notifications";
import Table from "./components/Table";
import Text from "./components/Text";
import Tag from "./components/Tag";
import Toggle from "./components/Toggle";

function App() {
  const [search, setSearch] = useState<string>("");
  const [teste, setTeste] = useState<string>("");
  const [ativa, setAtiva] = useState(false);

  const handleClickButton = useCallback(() => {
    search && setTeste(search);
  }, [search]);

  const handleChangeInput = useCallback((value: string) => {
    value && setSearch(value);
  }, []);

  return (
    <div
      className="App"
      style={{
        display: "inline-block",
        justifyContent: "space-between",
        textAlign: "center",
        padding: "1px",
      }}
    >
      <Header />
      <MenuHeader>Supremo</MenuHeader>
      <MenuItem>Agendamento</MenuItem>
      <Title>Hello world!</Title>
      <SearchInput
        placeholder="Pesquisar por professor"
        value={search}
        onChange={(value: string) => handleChangeInput(value)}
      />
      <Toggle onClick={() => setAtiva(!ativa)} />

      <br />
      <Button label="Novo Professor" onClick={handleClickButton} />
      <div>{teste}</div>

      <Avatar />
      <Text>Nome</Text>
      <Tag>Direito Civil</Tag>
      <Notifications />
      <Table />
      <Menu />
    </div>
  );
}

export default App;
