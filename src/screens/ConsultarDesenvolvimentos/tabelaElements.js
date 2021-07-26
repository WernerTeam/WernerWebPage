import styled from 'styled-components'
import React from 'react'

export const LinhaTabela = (props) => {
    return (
        <>
        <LinhaTabela1>
           <Coluna>{props.c1}</Coluna>
           <Coluna>{props.c2}</Coluna>
           <Coluna>{props.c3}</Coluna>
           <Coluna>{props.c4}</Coluna>
        </LinhaTabela1>
        </>
    )
}

export const Linhas = (props) => {
    return (
        <Linha>
          <Coluna>{props.c1}</Coluna>
           <Coluna>{props.c2}</Coluna>
           <Coluna>{props.c3}</Coluna>
           <Coluna>{props.c4}</Coluna>
        </Linha>
    )
}

export const Linha = styled.div`
    background-color: #ffffff;
    display: flex;
    width: 274px;
    margin-left: 6px;
    padding: 6px;

`

export const Coluna = styled.div`
width: 68.5px;
/* background-color: aqua; */
font-size: 12px;
margin: 5px;
text-align: center;


`

export const LinhaTabela1 = styled.div`
    margin-top: 15px;
    background-color: #ffffff;
    display: flex;
    width: 274px;
    margin-left: 6px;
    padding: 6px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-weight: bold;

`
export const BordaInferior = styled.div`
    background-color: #ffffff;
    display: flex;
    width: 274px;
    margin-left: 6px;
    padding: 6px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: black;

`