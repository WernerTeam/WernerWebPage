import styled from 'styled-components'
import React from 'react'

export const LinhaPrincipal = (props) => {
    return (
        <>
        <LinhaTabela>
           <CelulasPrincipais>{props.c1}</CelulasPrincipais>
           <CelulasPrincipais>{props.c2}</CelulasPrincipais>
           <CelulasPrincipais>{props.c3}</CelulasPrincipais>
           <CelulasPrincipais>{props.c4}</CelulasPrincipais>
        </LinhaTabela>
        </>
    )
}

export const LinhaTabela = styled.div`
    margin-top: 15px;
    background-color: #ffffff;
    display: flex;
    width: 274px;
    margin-top: 20px;
    margin-left: 6px;
    padding: 6px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-weight: bold;
`

export const CelulasPrincipais = styled.div`
width: 68.5px;
font-size: 12px;
margin: 5px;
text-align: center;
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
    margin-left: 6px;
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
`

export const BordaInferior = styled.div`
    background-color: #ffffff;
    width: 286px;
    height: 10px;
    margin-left: 6px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-width: 1px;
    border-top-style: solid;
    border-color: #adb5bd;
`
