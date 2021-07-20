import React from 'react'
import './App.css';
import { Navbar } from './components/Navbar'
import { ConsultarClientes } from './screens/ConsultarClientes';
import { Login } from './screens/Login'
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

function App() {
  return ( 
    <div className="App"> 
    {/* <ConsultarClientes> </ConsultarClientes> */}
    <Login> </Login>
    </div>
   
  );
}

export default App;
