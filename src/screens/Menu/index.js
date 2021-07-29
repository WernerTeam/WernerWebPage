import React from 'react'
import {Background, Container} from '../../global/theme'
import { Navbar } from '../../components/Navbar'
import { Button } from './menuElements'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <>
        <Navbar/>
            <Container> 
                <Link to="/desenvolvimentos">
            <Button> Consultar Desenvolvimentos</Button>
            </Link>
            <Link to="/consultar-clientes">
            <Button>Consultar Desenvolvimentos e Vendas</Button>
            </Link>
            <Background/>
            </Container>
        </>
    )
}