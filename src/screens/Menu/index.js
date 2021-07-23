import React from 'react'
import {Background} from '../../global/theme'
import { Navbar } from '../../components/Navbar'
import { Button } from './menuElements'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <div>
        <Navbar/>
        <Background>
            <div> 
                <div> 
                <Link to="/desenvolvimentos">
            <Button> Consultar Desenvolvimentos</Button>
            </Link>
            </div>
            <div> 
            <Link to="/consultar-clientes">
            <Button>Consultar Desenvolvimentos e Vendas</Button>
            </Link>
            </div>
            </div>
        </Background>
        </div>
    )
}