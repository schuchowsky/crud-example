import React, { useState, useCallback } from 'react';
import Button from './components/Button';
import Title from './components/Title';
import MenuHeader from './components/MenuHeader';
import MenuItem from './components/MenuItem';
import Header from './components/Header';
import Menu from './components/Menu';
import SearchInput from './components/SearchInput';
import Avatar from './components/Avatar';
import Notifications from './components/Notifications';
import Table from './components/Table';

function App() {
    const [search, setSearch] = useState<string>('');
    const [teste, setTeste] = useState<string>('');

    const handleClickButton = useCallback(() => {
        search && setTeste(search);
    }, [search]);

    const handleChangeInput = useCallback((value: string) => {
        value && setSearch(value);
    }, []);

  return (
    <div className="App">
        <Header />
        <MenuHeader>Supremo</MenuHeader>
        <MenuItem>Agendamento</MenuItem>
        <Title>Hello world!</Title>
        <SearchInput
            placeholder="Pesquisar por professor"
            value={search}
            onChange={(value: string) => handleChangeInput(value)}
        />
        <br/>
        <Button label="Novo Professor" onClick={handleClickButton} />
        <div>{teste}</div>
        <Avatar />
        <Notifications />
        <Table />
        <Menu />
    </div>
  )
}


export default App;