import React, {useState, useEffect} from "react";
import {
  Block,
  Background,
  Container,
  Logo,
  InputElement,
  Button,
  Msg
} from "./loginElements";
import logo from "../../assets/logo.png";
import { Menu } from "../../components/Menu";
import { api } from '../../services/api'

export const Login = () => {

  const [codigo, setCodigo] = useState("")
  const [senha, setSenha] = useState("")
  const [dados, setDados] = useState()
  const [negado, setNegado] = useState()


    useEffect(() => {
    api
      .get("/representantes")
      .then((response) => setDados(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const handleClick = () => {
    var valid = -1;
	for (var i = 0; i < dados.length; i++) {
		if (codigo == dados[i].codigo && senha == dados[i].senha) {
			valid = i;
			break;
		}
	}
	if (valid != -1) {
		console.log("Login efetuado com sucesso")
    setNegado(false);
	} else {
    console.log("Usuario ou senha incorreto")
     setNegado(true);
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
              placeholder="Código"
              onChange={(e) => setCodigo(e.target.value)}
              onKeyDown={handleClick} 
            />
            <InputElement
              type="password"
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
              onKeyDown={handleClick} 
            />
            <Button onClick={handleClick} style={{color: "#ffffff"}}>Entrar</Button>
            {(negado) ?  <Msg> Código e/ou senha incorreto(s).</Msg> : ""}
            </div>
        </Block>
      </Container>
    </Background>
  );
};
export default Login;
