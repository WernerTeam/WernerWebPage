import React, {useEffect, useState} from 'react'
import { Redirect } from "react-router-dom";
import { Background } from '../../global/theme';
import { SvgComponent } from './dashboard'
import styled from 'styled-components'


export const TesteSvg = () => {

const [opcao, setOpcao] = useState("");
const [desativar, setDesativar] = useState();

useEffect (() => {
    setOpcao("active")
  }, [desativar]);


const ativar = () => {
  setOpcao("active")
}

  return (
      <>
      <Overlay> 
    </Overlay>
    <SvgComponent className={opcao}> </SvgComponent>
    
    </>
  )
}

export const Overlay = styled.div`
    background-color: white;
    opacity: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    justify-content: center;
    padding-top: 40px;
    display: flex;
`