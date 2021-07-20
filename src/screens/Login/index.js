import React, {useState, useEffect} from "react";
import {
  Block,
  Background,
  Container,
  Logo,
  InputElement,
  Button,
} from "./loginElements";
import logo from "../../assets/logo.png";

import { Menu } from "../../components/Menu";
import { ConsultarClientes } from "../ConsultarClientes";

export const Login = () => {

  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")

  const handleClick = () => {

  if (usuario == senha) {
    console.log("login feito com sucesso")
  }
  else {
    console.log("usuario e senha negado")
  }
  
}

  return (
    <Background>
      <Container>
        <Logo>
          <img src={logo} style={{ width: "70px" }} />
        </Logo>
        <Block>
          <div>
            <InputElement
              type="text"
              placeholder="Usuário"
              controlId="usuario"
              onChange={(e) => setUsuario(e.target.value)}
            />
            <InputElement
              type="text"
              placeholder="Senha"
              controlId="senha"
              onChange={(e) => setSenha(e.target.value)}
            />
            <Button onClick={handleClick} style={{color: "#ffffff"}}>Entrar</Button>
            </div>
        </Block>
      </Container>
    </Background>
  );
};
export default Login;
