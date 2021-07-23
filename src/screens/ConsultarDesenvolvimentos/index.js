import React from "react";
import { Background, PrimaryFont, Button } from "../../global/theme";
import { Input } from "../../components/Input";
import "../../App.css";
import { Navbar } from "../../components/Navbar";
import { Link } from 'react-router-dom'


export const ConsultarDesenvolvimentos = () => {
  
    const handleClick = () => {

    }
  
    return (
    <>
    <Navbar/>
      <Background>
          <div>
            <PrimaryFont> Consultar Desenvolvimentos</PrimaryFont>
            <Input
              title="Código:"
              placeholder="Código do pedido de desenvolvimento"
            />
            <Input title="Nome:" placeholder="Nome do cliente" />
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
