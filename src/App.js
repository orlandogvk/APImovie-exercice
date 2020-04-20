import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modulecomponent from './containers/List';
import Nav from 'react-bootstrap/Nav';

class App extends React.Component{
  render(){
    return(
      <div className="App">
      <Nav  variant="pills" defaultActiveKey="#" as="ul">
        <Nav.Link href="#">Aplicación Películas</Nav.Link>
      </Nav>
      <Modulecomponent/>
      </div>
    )
  }
}
export default App;


