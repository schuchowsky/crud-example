import React from "react";
import Button from "./components/Button";
import Title from "./components/Title";
import Header from "./components/Header";
import Searchinput from "./components/Searchinput";
import Avatar from "./components/Avatar";
import Notifications from "./components/Notifications";
import Table from "./components/Table";

function App() {
   constructor(props) {
     super(props);
     this.state = {value: 'string'};
     
    this.handleChange = this.handleChange.bind(this);
   }

   handleChange(e) {
     this.setState({value: e.target.value});
   }
   render() {
    
    const value = this.state.value;
    return (
      <div className="App">
        <Header />
        <br /> 
        <Title>Hello world!</Title>
        <br />
        <Searchinput value={value} onChange={this.handleChange}  /> 
       
        <br />
        <Button label={"Novo Professor"} onClick={() => alert("Clicou no botão")} />
        <br />
        <Avatar />
        <br />
        <Notifications />
        <br />
        <Table />
      </div>
    )
  }
}

export default App;
