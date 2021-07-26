import React from "react";
import { Background, PrimaryFont, Button, styleAutocomplete } from "../../global/theme";
import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import axios from "axios";
import { Tabela } from "./tabela";

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
          <Input title="De" placeholder="dd/mm/yyyy" width="120px"/>
          <Input title="Até" placeholder="dd/mm/yyyy" width="120px" marginLeft="10px"/>
          </div>
          <Link to="/timeline">
          <Button onClick={handleClick} style={{color: "#ffffff"}}>Ok</Button>
          </Link>
          <Tabela> </Tabela>
          </div>
      </Background>
    </>
  );
};
