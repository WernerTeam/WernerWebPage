import React from 'react'
import './App.css';
import { ConsultarClientes } from './screens/ConsultarClientes';
import { Login } from './screens/Login'
import { Menu } from './screens/Menu'
import {ConsultarDesenvolvimentos} from './screens/ConsultarDesenvolvimentos'
import { Timeline } from './screens/Timeline'

function App() {
  return ( 
       <div className="App">
       {/* <Login> </Login> */}
       {/* <Menu> </Menu> */}
       {/* <ConsultarDesenvolvimentos> </ConsultarDesenvolvimentos> */}
       {/* <ConsultarClientes></ConsultarClientes> */}
       <Timeline> </Timeline>
    </div>
  );
}

export default App;
