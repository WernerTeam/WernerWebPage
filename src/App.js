import React from 'react'
import './App.css';
import { Navbar } from './components/Navbar'
import { ConsultarClientes } from './screens/ConsultarClientes';

function App() {
  return ( 
    <div className="App"> 
      <Navbar />
    <ConsultarClientes> </ConsultarClientes>
    </div>
  );
}

export default App;
