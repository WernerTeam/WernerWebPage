import React from "react";
import { Background, Button, Block } from "../../global/theme";
import "../../App.css";
import { Navbar } from "../../components/Navbar";
import { Infos } from "../../components/InfosTimeline";
import { Seta } from './timelineElements'

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


export const Timeline = () => {

  const Pessoa = {nome:"Brayan Cataldo", desenvolvimento:"173642", data:"23/11/2001", status: "L"};


  const handleClick = () =>{

  }

    return (
    <>
    <Navbar/>
      <Background>
          <div>
        <Block> 
            <Infos title="Cliente" info={Pessoa.nome}> </Infos>
            <Infos title="Desenvolvimento" info={Pessoa.desenvolvimento}> </Infos>
            <Infos title="Data" info={Pessoa.data}> </Infos>
        <Seta status={Pessoa.status}/>
        </Block>
        <Button onClick={handleClick} style={{color: "#ffffff", marginLeft: "135px"}}>Gerar documento</Button>
        </div>
      </Background>
    </>
  );
};
