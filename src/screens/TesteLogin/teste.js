import React, {useEffect, useState} from 'react'
import { SvgComponent } from './dashboard'
import './styles.css'
import { Redirect } from "react-router-dom";

export const Teste = () => {

const [opcao, setOpcao] = useState();
const [desativar, setDesativar] = useState();

useEffect (() => {
    setOpcao("active")
    return <Redirect push to="/menu"/>
  }, [desativar]);


const ativar = () => {
  setOpcao("active")
}

  return (
    <div className="wrapper"> 
    <SvgComponent className={opcao}> </SvgComponent>
      <div class="controls">
  </div>
    </div>
  )
}
