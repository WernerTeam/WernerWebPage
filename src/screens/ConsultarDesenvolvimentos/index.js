import React from "react";
import { Background, PrimaryFont, Button, styleAutocomplete } from "../../global/theme";
import { Input } from "../../components/Input";
import "../../App.css";
import { Navbar } from "../../components/Navbar";
import { Link } from 'react-router-dom'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { AutoComplete } from '../../components/InputAutocomplete'

export const ConsultarDesenvolvimentos = () => {

    const handleClick = () => {

    }
  
    return (
    <>
    <Navbar/>
      <Background>
          <div>
            <PrimaryFont> Consultar Desenvolvimentos</PrimaryFont>
            <div>
          <Input title="Código" placeholder="Código"/>
          <Input title="Nome do Cliente" placeholder="Nome do Cliente"/>
          </div>
            <div style={{display: "flex"}}> 
          <Input title="De" placeholder="dd/mm/yyyy" width="126px"/>
          <Input title="Até" placeholder="dd/mm/yyyy" width="126px" marginLeft="10px"/>
          </div>
          <Link to="/timeline">
          <Button onClick={handleClick} style={{color: "#ffffff"}}>Ok</Button>
          </Link>
          </div>
      </Background>
    </>
  );
};
