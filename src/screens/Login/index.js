import React, {useState} from "react";
import {
  Block,
  Background,
  Logo,
  InputElement,
  Msg,
  Container 
} from "./loginElements";
import logo from "../../assets/logo.png";
import { api } from '../../services/api'
import { Submit} from "../../global/theme";
import axios from "axios";
import { Redirect } from "react-router-dom";

export const Login = () => {

  const [codigo, setCodigo] = useState("")
  const [senha, setSenha] = useState("")
  const [autenticated, setAutenticated] = useState(false);
  const [erro, setErro] = useState(false);
  
const user_object = {
  username: codigo,
  password: senha
};

const handleSubmit = event => {
  event.preventDefault();

axios.post(api+"/api/auth/signin", user_object)
.then(res => {
  const token = res.data
  localStorage.setItem("token", token);
  return setAutenticated(true)
})
.catch(
  function (error) {
    setErro(true)
  }

);
}

  return (
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
            {(erro) ? <Msg> Código e/ou Senha incorreto(a).</Msg> : null}
            </div>
        </Block>
    <Background/> 
    </Container>
  );
};