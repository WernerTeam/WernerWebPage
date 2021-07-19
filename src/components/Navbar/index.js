import React from 'react'
import { Nav, Logo } from './NavbarElements'
import logo from './logo.png'

export const Navbar = () => {
    return (
        <div>
           <Nav> 
                <img src={logo} style={{width: "50px"}}/> 
           </Nav>
        </div>
    )
}