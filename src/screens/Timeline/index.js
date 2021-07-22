import React from "react";
import { Background, Button, Block } from "../../global/theme";
import "../../App.css";
import { Navbar } from "../../components/Navbar";
import { Infos } from "../../components/InfosTimeline";

export const Timeline = () => {

    const handleClick = () => {

    }
  
    return (
    <>
    <Navbar/>
      <Background>
          <div>
        <Block> 
            <Infos title="Cliente" info="Agatha Carvalho"> </Infos>
            <Infos title="Desenvolvimento" info="173428"> </Infos>
            <Infos title="Data" info="23/05/2021"> </Infos>
        </Block>
        <Button onClick={handleClick} style={{color: "#ffffff", marginLeft: "135px"}}>Gerar documento</Button>
        </div>
      </Background>
    </>
  );
};
