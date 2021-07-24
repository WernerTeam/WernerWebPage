import React from "react";
import { Background, PrimaryFont, Button, styleAutocomplete } from "../../global/theme";
import { Input } from "../../components/Input";
import "../../App.css";
import { Navbar } from "../../components/Navbar";
import { Link } from 'react-router-dom'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { InputAutocomplete } from '../../components/InputAutocomplete'

export const ConsultarDesenvolvimentos = () => {
  
  const items = [
    {
      id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ]

    const handleClick = () => {

    }
  
    return (
    <>
    <Navbar/>
      <Background>
          <div>
            <PrimaryFont> Consultar Desenvolvimentos</PrimaryFont>
            <div>
            <InputAutocomplete title="Código:" placeholder={"Código do pedido de desenvolvimento"}/>

          <InputAutocomplete title="Nome:" dados={items} placeholder={"Nome do cliente"}/>
          </div>
            <div style={{display: "flex"}}> 
          <Input title="De" placeholder="dd/mm/yyyy" width="120px"/>
          <Input title="Até" placeholder="dd/mm/yyyy" width="120px" marginLeft="10px"/>
          </div>
          <Link to="/timeline">
          <Button onClick={handleClick} style={{color: "#ffffff"}}>Ok</Button>
          </Link>
          </div>
      </Background>
    </>
  );
};
