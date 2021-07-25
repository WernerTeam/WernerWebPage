import React from 'react'
import { Nav} from './NavbarElements'
import logo from '../../assets/logo.png'

export const Navbar = () => {
    return (
        <div>
           <Nav> 
                <img src={logo} style={{width: "45px"}}/> 
           </Nav>
        </div>
    )
}