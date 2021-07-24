import React from 'react'
import './App.css';
import { Timeline } from './screens/Timeline';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from './screens/Login';
import { Menu } from './screens/Menu'
import { ConsultarClientes } from './screens/ConsultarClientes';
import { ConsultarDesenvolvimentos } from './screens/ConsultarDesenvolvimentos';
import login from './screens/TesteLogin/Login'
import dashboard from './screens/TesteLogin/dashboard'
import { Teste } from './screens/TesteLogin/teste'

function App() {
  return ( 
       <div className="App">
       <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/menu" component={Menu} />
            <Route path="/teste" component={Teste} />
            <Route path="/consultar-clientes" component={ConsultarClientes} />
            <Route path="/desenvolvimentos" component={ConsultarDesenvolvimentos} />
            <Route path="/timeline" component={Timeline} />
        </Switch>
    </ BrowserRouter>
    </div>
  );
}

export default App;
