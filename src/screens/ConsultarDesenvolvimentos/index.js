import React, { useState, useEffect} from "react";
import { Background, PrimaryFont, Button, styleAutocomplete } from "../../global/theme";
import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import axios from "axios";
import { LinhaPrincipal, Linhas, BordaInferior } from '../../components/Tabela'
import { Container } from "./elements";

export const ConsultarDesenvolvimentos = () => {

  const [visible, setVisible] = useState(false)
  const [input, setInput] = useState()
  const [dados, setDados] = useState([])


  // const token = localStorage.getItem("token")

  // const auth = {
  //   headers: {"Authorization": `Bearer ${token}`}
  // }

  useEffect(() => {
    
    axios.get(`http://ecommerce-api-penguin.herokuapp.com/cliente/${input}`)
  .then(response => {
      // If request is good...
      setDados(response.data)
   })
  .catch((error) => {
      console.log('error ' + error);
   });
  }, [input])

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value)
  }

    const handleClick = () => {
      if (!visible){
       setVisible(true);
      }
    }

    return (
    <>
    <Navbar/>
    <Container>
          <div>
            <PrimaryFont> Consultar Desenvolvimentos</PrimaryFont>
            <div>
          <Input title="Código" placeholder="Código" onChange={handleChange}/>
          <Input title="Nome do Cliente" placeholder="Nome do Cliente" value={dados.nome}/>
          </div>
            <div style={{display: "flex"}}> 
          <Input title="De" placeholder="dd/mm/yyyy" width="120px"/>
          <Input title="Até" placeholder="dd/mm/yyyy" width="120px" marginLeft="10px"/>
          </div>
          <Button onClick={handleClick} style={{color: "#ffffff"}}>Ok</Button>
          {/* <div style={{ display: visible ? "block" : "none" }}>
          <div>
            <LinhaPrincipal c1="Cliente" c2="Código" c3="Status" c4="Data do Pedido" fontSize="10px"/>
            {dados.map((pessoa)=> (
            <Linhas key={pessoa.id} c1={pessoa.nome} c2={pessoa.cpf} c3={pessoa.usuario} c4={pessoa.dataNascimento}/>
            )) }
             <BordaInferior/>
             </div>
        </div> */}
          <div style={{ display: visible ? "block" : "none" }}>
            <LinhaPrincipal c1="Cliente" c2="Código" c3="Status" c4="Data do Pedido" fontSize="10px"/>
        <Linhas key={dados.id} c1={dados.nome} c2={dados.cpf} c3={dados.usuario} c4={dados.dataNascimento}/>
        <BordaInferior/>
          </div>
          </div>
          <Background/>
          </Container>
    </>
  );
};
