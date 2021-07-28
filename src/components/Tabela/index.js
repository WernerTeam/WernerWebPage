import styled from 'styled-components'
import React from 'react'

export const LinhaPrincipal = (props) => {
    return (
        <LinhaTabela>
           <CelulasPrincipais style={{fontSize: props.fontSize}}>{props.c1}</CelulasPrincipais>
           <CelulasPrincipais style={{fontSize: props.fontSize}}>{props.c2}</CelulasPrincipais>
           <CelulasPrincipais style={{fontSize: props.fontSize}}>{props.c3}</CelulasPrincipais>
           <CelulasPrincipais style={{fontSize: props.fontSize}}>{props.c4}</CelulasPrincipais>
        </LinhaTabela>
    )
}

export const LinhaTabela = styled.div`
    margin-top: 25px;
    background-color: #ffffff;
    display: flex;
    width: 274px;
    margin-left: 5px;
    padding: 6px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-weight: bold;
    text-align: center;
`

export const CelulasPrincipais = styled.div`
width: 68.5px;
/* font-size: 8px; */
margin: 0 auto;
`

export const Linhas = ({c1, c2, c3, c4}) => {
    return (
        <Linha>
          <Celulas >{c1}</Celulas>
           <Celulas>{c2}</Celulas>
           <Celulas>{c3}</Celulas>
           <Celulas>{c4}</Celulas>
        </Linha>
    )
}

export const Linha = styled.div`
    background-color: #ffffff;
    display: flex;
    width: 286px;
    margin-left: 5px;
    border-width: 1px;
    border-top-style: solid;
    border-color: #adb5bd;
`

export const Celulas = styled.div`
width: 70px;
font-size: 12px;
text-align: center;
border-width: 1px;
    border-left-style: solid;
    border-color: #adb5bd;
    padding: 3px;
`

export const BordaInferior = styled.div`
    background-color: #ffffff;
    width: 286px;
    height: 10px;
    margin-left: 5px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-width: 1px;
    border-top-style: solid;
    border-color: #adb5bd;
`
