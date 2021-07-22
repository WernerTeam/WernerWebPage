import React from 'react'
import { Primary, Secundary } from './InfosElement'

export const Infos = (props) => {
    return (
        <div>
            <Primary> {props.title}</Primary>
            <Secundary>{props.info}</Secundary>
        </div>
    )
}