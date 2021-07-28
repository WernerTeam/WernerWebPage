import React, {useState} from "react";
import { Background, PrimaryFont, Button } from "../../global/theme";
import { Input } from "../../components/Input";
import "../../App.css";
import { Navbar } from "../../components/Navbar";
import { Container } from './clientesElements'
import { LinhaPrincipal, Linhas, BordaInferior } from '../../components/Tabela'

export const ConsultarClientes = () => {

  const [visible, setVisible] = useState(false)

  const dados = [{"id":1,"nome":"Jose das Coves","usuario":"josecoves","cpf":"65782885033","email":"jose.coves@email.com","dataNascimento":"1992-02-01T00:00:00Z","endereco":{"rua":"Rua dos Bobos","numero":"0","complemento":"","bairro":"Castanheira","cidade":"Metropolis","estado":"SP","cep":"23451234"}},{"id":2,"nome":"Maria das Coves","usuario":"maria","cpf":"69191608031","email":"maria.coves@email.com","dataNascimento":"1993-04-06T00:00:00Z","endereco":{"rua":"Rua dos Bobos","numero":"0","complemento":"","bairro":"Castanheira","cidade":"Metropolis","estado":"SP","cep":"23451234"}},{"id":3,"nome":"Claudio Jose","usuario":"claudio","cpf":"64294714034","email":"claudio.jose@email.com","dataNascimento":"1991-08-13T00:00:00Z","endereco":{"rua":"Estrada Torta","numero":"45","complemento":"Bloco 2","bairro":"Castanheira","cidade":"Aroeira","estado":"MG","cep":"25839248"}},{"id":4,"nome":"Daniele Aparecida","usuario":"dani","cpf":"64294714034","email":"dani.aparecida@email.com","dataNascimento":"2002-03-21T00:00:00Z","endereco":{"rua":"Estrada Reta","numero":"19","complemento":"Casa 2","bairro":"Sinistro","cidade":"Tangamandapio","estado":"MG","cep":"45627894"}},{"id":5,"nome":"Cleberson Carlos","usuario":"clebinho","cpf":"56943214055","email":"kleb1990@email.com","dataNascimento":"2001-07-11T00:00:00Z","endereco":{"rua":"Rua das Ruas","numero":"99","complemento":"","bairro":"Distrito 1","cidade":"Cidade-Alerta","estado":"AL","cep":"52742264"}}]

  function handleChange(e) {
    e.preventDefault();
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
          {/* <LinhaPrincipal c1="Cliente" c2="Quant. Pedido Desenvolvimento" c3="Qnt. Pedido Venda" c4="Qnt. em M Pedidos Venda" fontSize="8px"/>
            {pessoas.map((pessoa)=> (
            <Linhas key={pessoa.codigo} c1={pessoa.nome} c2={pessoa.codigo} c3={pessoa.status} c4={pessoa.previsao}/>
            )) }
             <BordaInferior/> */}
             <div style={{ display: visible ? "block" : "none" }}>
             <LinhaPrincipal c1="Cliente" c2="Quant. Pedido Desenvolvimento" c3="Qnt. Pedido Venda" c4="Qnt. em M Pedidos Venda" fontSize="8px"/>
        <Linhas key={dados.id} c1={dados.nome} c2={dados.cpf} c3={dados.usuario} c4={dados.dataNascimento}/>
        <BordaInferior/>
          </div>
          </Container>
          <Background/>
    </>
  );
};
