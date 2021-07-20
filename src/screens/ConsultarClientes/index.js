import React from "react";
import { Background, PrimaryFont } from "../../global/theme";
import { Input } from "../../components/Input";
import "../../App.css";
import { Navbar } from "../../components/Navbar";

export const ConsultarClientes = () => {
  return (
    <>
    <Navbar/>
      <Background>
        <div style={{position: "absolute"}}>
            <PrimaryFont> Consultar Clientes</PrimaryFont>
          <div>
            <Input
              title="Código:"
              placeholder="Código do pedido de desenvolvimento"
            />
            <Input title="Nome:" placeholder="Nome do cliente" />
          </div>
          <Input title="De" placeholder="dd/mm/yyyy" width="100px"/>
          <Input title="Até" placeholder="dd/mm/yyyy" width="100px"/>
        </div>
      </Background>
    </>
  );
};
