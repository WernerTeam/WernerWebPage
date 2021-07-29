import React from "react";
import { Background, Button, Block } from "../../global/theme";
import "../../App.css";
import { Navbar } from "../../components/Navbar";
import { Infos } from "../../components/InfosTimeline";
import { Seta, Container } from './timelineElements'
import Pdf from "react-to-pdf";

export const Timeline = () => {

  const Pessoa = {nome:"Brayan Cataldo", desenvolvimento:"173642", data:"23/11/2001", status: "L"};

  const ref = React.createRef();

    return (
    <>
    <Navbar/>
    <Container>
    <div ref={ref}>
        <Block> 
    <div style={{padding: "20px"}}>
            <Infos title="Cliente" info={Pessoa.nome}> </Infos>
            <Infos title="Desenvolvimento" info={Pessoa.desenvolvimento}> </Infos>
            <Infos title="Data" info={Pessoa.data}> </Infos>
        <Seta status={Pessoa.status}/>
        </div>
        </Block>
      </div>
        <Pdf targetRef={ref} scale={2.5} x={7}filename={`Pedido${Pessoa.desenvolvimento}.pdf`}>
        {({ toPdf }) => <Button onClick={toPdf} style={{color: "#ffffff", marginLeft: "140px"}}>Gerar documento</Button>}
      </Pdf>
        <Background/>
        </Container>
    </>
  );
};
