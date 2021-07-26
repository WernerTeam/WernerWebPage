import React from 'react'
import { LinhaTabela, Linhas, BordaInferior } from './tabelaElements'

export const Tabela = () => {

    // const pessoa = {
    //     nome: "Brayan",
    //     codigo: "29483",
    //     status: "L",
    //     previsao: "23/11/2021"
    // }

    // Fazer map da tabela

    return (
        <div style={{ justifyItems: "center"}}>
            <LinhaTabela c1="Cliente" c2="Código" c3="Status" c4="Previsão"/>
             <Linhas c1="Agatha Carvalho" c2="FMT911" c3="Produção" c4="24/10/2021"/>
             <Linhas c1="Agatha Carvalho" c2="FMT911" c3="Produção" c4="24/10/2021"/>
             <Linhas c1="Agatha Carvalho" c2="FMT911" c3="Produção" c4="24/10/2021"/>
             <Linhas c1="Agatha Carvalho" c2="FMT911" c3="Produção" c4="24/10/2021"/>
             <BordaInferior/>
        </div>
    )
}