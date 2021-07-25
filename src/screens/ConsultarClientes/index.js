import React from "react";
import { Background, PrimaryFont, Button } from "../../global/theme";
import { Input } from "../../components/Input";
import "../../App.css";
import { Navbar } from "../../components/Navbar";

export const ConsultarClientes = () => {

  const handleClick = () => {

  }

  return (
    <>
    <Navbar/>
      <Background>
      <div>
            <PrimaryFont> Consulta de Clientes</PrimaryFont>
            <Input
              title="Nome:"
              placeholder="Nome do cliente"
            />
            <div style={{display: "flex"}}> 
          <Input title="De" placeholder="dd/mm/yyyy" width="125px"/>
          <Input title="Até" placeholder="dd/mm/yyyy" width="125px" marginLeft="10px"/>
          </div>
          <Button onClick={handleClick} style={{color: "#ffffff"}}>Ok</Button>
          </div>
      </Background>
    </>
  );
};
