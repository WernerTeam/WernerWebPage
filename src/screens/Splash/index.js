import React, {useEffect, useState} from 'react'
import { SvgComponent } from './svg'
import styled from 'styled-components'


export const Splash = () => {

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
      <div style={{display: "block"}}>
      <div style={{display: 'flex',justifyContent: "center", alignItems: "center", marginTop: "10%", }}> 
    <SvgComponent className={opcao}> </SvgComponent>
    <meta http-equiv="refresh" content="4;url=http://localhost:3000/menu" />
    </div>
    </div>
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