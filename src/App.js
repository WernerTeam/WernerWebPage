import React, { useState} from 'react'
import './App.css';
import { Navbar } from './components/Navbar'
import { ConsultarClientes } from './screens/ConsultarClientes';
import { Login } from './screens/Login'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  const [teste, setTeste] = useState([])


const OK = () => {
  console.log(teste)
}

  return ( 
       <div className="App">
       <Login> </Login>
    {/* <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Login} />
              <Route path='/Menu' component={Menu} />
              </Switch>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
