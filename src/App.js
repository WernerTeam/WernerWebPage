import React from 'react'
import './App.css';
import { Timeline } from './screens/Timeline';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from './screens/Login';
import { Menu } from './screens/Menu'
import { ConsultarClientes } from './screens/ConsultarClientes';
import { ConsultarDesenvolvimentos } from './screens/ConsultarDesenvolvimentos';
import { Splash } from './screens/Splash'
import { Teste } from './screens/TesteLogin/teste'

function App() {
  return ( 
       <div className="App">
       <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/menu" component={Menu} />
            <Route path="/splash" component={Splash} />
            <Route path="/consultar-clientes" component={ConsultarClientes} />
            <Route path="/desenvolvimentos" component={ConsultarDesenvolvimentos} />
            <Route path="/timeline" component={Timeline} />
            <Route path="/teste" component={Teste} />
        </Switch>
    </ BrowserRouter>
    </div>
  );
}

export default App;
