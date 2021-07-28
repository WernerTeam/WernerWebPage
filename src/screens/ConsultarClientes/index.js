import React from "react";
import { Background, PrimaryFont, Button } from "../../global/theme";
import { Input } from "../../components/Input";
import "../../App.css";
import { Navbar } from "../../components/Navbar";
import { Container } from './clientesElements'
import { LinhaPrincipal, Linhas, BordaInferior } from '../../components/Tabela'

export const ConsultarClientes = () => {

  const pessoas = [{
    nome: "Brayan",
    codigo: "29483",
    status: "L",
    previsao: "23/11/2021"
},
{
  nome: "Brayan",
  codigo: "38492",
  status: "L",
  previsao: "23/11/2021"
},
{
nome: "Brayan",
codigo: "38452",
status: "L",
previsao: "23/11/2021"
},
{
nome: "Brayan",
codigo: "38494",
status: "L",
previsao: "23/11/2021"
},
{
nome: "Brayan",
codigo: "77492",
status: "L",
previsao: "23/11/2021"
},
{
nome: "Brayan",
codigo: "3822",
status: "L",
previsao: "23/11/2021"
},
{
nome: "Brayan",
codigo: "38442",
status: "L",
previsao: "23/11/2021"
},
{
nome: "Brayan",
codigo: "353",
status: "L",
previsao: "23/11/2021"
},
{
nome: "Brayan",
codigo: "463",
status: "L",
previsao: "23/11/2021"
}]

  const handleClick = () => {

  }

  return (
    <>
    <Navbar/>
    <Container> 
      <div>
            <PrimaryFont> Consulta de Clientes</PrimaryFont>
            <Input
              title="Nome:"
              placeholder="Nome do cliente"
            />
            <div style={{display: "flex"}}> 
          <Input title="De" placeholder="dd/mm/yyyy" width="120px"/>
          <Input title="Até" placeholder="dd/mm/yyyy" width="120px" marginLeft="10px"/>
          </div>
          <Button onClick={handleClick} style={{color: "#ffffff"}}>Ok</Button>
          </div>
          <LinhaPrincipal c1="Cliente" c2="Código" c3="Status" c4="Previsão"/>
            {pessoas.map((pessoa)=> (
            <Linhas key={pessoa.codigo} c1={pessoa.nome} c2={pessoa.codigo} c3={pessoa.status} c4={pessoa.previsao}/>
            )) }
             <BordaInferior/>
          </Container>
          <Background/>
    </>
  );
};
