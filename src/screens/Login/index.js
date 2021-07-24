import React, {useState, useEffect} from "react";
import {
  Block,
  Background,
  Container,
  Logo,
  InputElement,
  Msg
} from "./loginElements";
import logo from "../../assets/logo.png";
import { api } from '../../services/api'
import { Submit } from "../../global/theme";
import { Link } from 'react-router-dom'
import axios from "axios";
import { Redirect } from "react-router-dom";

export const Login = () => {

  const [codigo, setCodigo] = useState("")
  const [senha, setSenha] = useState("")
  const [autenticated, setAutenticated] = useState(false);
  const [token, setToken] = useState();
  const [error, setError] = useState("");
  
  useEffect(() => {

  });

const user_object = {
  username: codigo,
  password: senha
};

const endpoint = "http://localhost:8080/api/auth/signin";

const handleSubmit = event => {
  event.preventDefault();

axios.post(endpoint, user_object).then(res => {
  localStorage.setItem("authorization", res.data.token);
   setToken(res.data);
   return handleRedirect();
  // return alert("Token de login:" + token )
  // return autenticado = true;
  // return this.handleDashboard();
});
}

const handleRedirect = () => {

  return setAutenticated(true);
}

  return (
    <Background>
      <Container>
        <Logo>
          <img src={logo} style={{ width: "70px" }} />
        </Logo>
        <Block>
          <div>
          <form onSubmit={handleSubmit}>
            <label>
            <InputElement
              type="text"
              placeholder="Código"
          value={codigo}
          onChange={e => setCodigo(e.target.value)}
            />
            <InputElement
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
            </label>
            <Submit type="submit" value="Entrar" />
          </form>
            {(autenticated) ? <Redirect push to="/menu"/> : null }
            </div>
        </Block>
      </Container>
    </Background>
  );
};

export default Login;