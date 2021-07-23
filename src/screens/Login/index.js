import React, {useState, useEffect} from "react";
import {
  Block,
  Background,
  Container,
  Logo,
  InputElement
} from "./loginElements";
import logo from "../../assets/logo.png";
import { api } from '../../services/api'
import { Submit } from "../../global/theme";
import { Link } from 'react-router-dom'


export const Login = () => {

  const [codigo, setCodigo] = useState("")
  const [senha, setSenha] = useState("")
  const [dados, setDados] = useState()
  const [autenticated, setAutenticated] = useState(false);

    useEffect(() => {
    api
      .get("/representantes/validar/{codigo}/{senha}")
      .then((response) => setDados(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      }
      );
  }, []);

  const handleSubmit = (evt) => {
      evt.preventDefault();
      if (autenticated) {
        console.log("Login efetuado com sucesso")
      alert(`Login efetuado com sucesso ${codigo} ${senha}`)

      } else {
        console.log("Usuario ou senha incorreto")
      alert(`Usuario ou senha incorreto ${codigo} ${senha}`)
      } 
  }

  const handleClick = () => {
   

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
              type="text"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
            </label>
          <Link to="/menu">
            <Submit type="submit" value="Entrar" />
            </Link>
          </form>
            {/* {(negado) ?  <Msg> Código e/ou senha incorreto(s).</Msg> : ""} */}
            </div>
        </Block>
      </Container>
    </Background>
  );
};
export default Login;
