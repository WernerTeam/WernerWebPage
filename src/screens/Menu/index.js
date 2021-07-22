import React from 'react'
import {Background} from '../../global/theme'
import { Navbar } from '../../components/Navbar'
import { Button } from './menuElements'

export const Menu = () => {
    return (
        <div>
        <Navbar/>
        <Background>
            <div> 
                <div> 
            <Button>Consultar Desenvolvimentos</Button>
            </div>
            <div> 
            <Button>Consultar Desenvolvimentos e Vendas</Button>
            </div>
            </div>
        </Background>
        </div>
    )
}