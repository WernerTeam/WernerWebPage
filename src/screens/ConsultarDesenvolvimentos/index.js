import React from "react";
import { Background, PrimaryFont, Button, styleAutocomplete } from "../../global/theme";
import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import axios from "axios";
import { LinhaPrincipal, Linhas, BordaInferior } from '../../components/Tabela'
import { Container } from "./elements";

export const ConsultarDesenvolvimentos = () => {


  // const token = localStorage.getItem("token")

  // const auth = {
  //   headers: {"Authorization": `Bearer ${token}`}
  // }


    const handleClick = () => {
  //     axios.get(api+"/api/representantes", auth)
  //     .then(response => {
  //         // If request is good...
  //         console.log(response.data);
  //      })
  //     .catch((error) => {
  //         console.log('error ' + error);
  //      });
    }
  

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

    
    // const numbers = ["Agatha", "19342", "L", "23/11/2021"];

    return (
    <>
    <Navbar/>
    <Container>
          <div>
            <PrimaryFont> Consultar Desenvolvimentos</PrimaryFont>
            <div>
          <Input title="Código" placeholder="Código"/>
          <Input title="Nome do Cliente" placeholder="Nome do Cliente"/>
          </div>
            <div style={{display: "flex"}}> 
          <Input title="De" placeholder="dd/mm/yyyy" width="120px"/>
          <Input title="Até" placeholder="dd/mm/yyyy" width="120px" marginLeft="10px"/>
          </div>
          <Button onClick={handleClick} style={{color: "#ffffff"}}>Ok</Button>
          <div>
            <LinhaPrincipal c1="Cliente" c2="Código" c3="Status" c4="Previsão"/>
            {pessoas.map((pessoa)=> (
            <Linhas key={pessoa.codigo} c1={pessoa.nome} c2={pessoa.codigo} c3={pessoa.status} c4={pessoa.previsao}/>
            )) }
             <BordaInferior/>
        </div>
          </div>
          <Background/>
          </Container>
    </>
  );
};
