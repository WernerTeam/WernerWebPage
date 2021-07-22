import React, {useState} from "react";
import styled from "styled-components"

export const Seta = (props) => {

  return (
    <div style={{marginTop: "80px"}}>
        <div style={{display: "flex"}}>
    <Status1> {(props.status == "C" | props.status == "E" | props.status == "L")  ? "Desenvolvimento": ""}</Status1> 
    <Status3> {(props.status == "L") ? "Preparando Entrega" : " "}</Status3> 
    </div>
      <svg width="241" height="24" viewBox="0 0 241 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "8px", marginTop: "40px" }}>
<path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM240.061 13.0606C240.646 12.4749 240.646 11.5251 240.061 10.9393L230.515 1.39338C229.929 0.807592 228.979 0.807592 228.393 1.39338C227.808 1.97916 227.808 2.92891 228.393 3.5147L236.879 12L228.393 20.4853C227.808 21.071 227.808 22.0208 228.393 22.6066C228.979 23.1924 229.929 23.1924 230.515 22.6066L240.061 13.0606ZM2 13.5L239 13.5L239 10.5L2 10.5L2 13.5Z" fill="#111111"/>
</svg>
    <Status2> {(props.status == "L" | props.status == "E") ? "Produção" : " "}</Status2> 
    {(props.status == "C" | props.status == "E" | props.status == "L") ? <Bolinha1> </Bolinha1> : ""}
    {(props.status == "L" | props.status == "E") ? <Bolinha2> </Bolinha2> : ""}
    {(props.status == "L") ? <Bolinha3> </Bolinha3> : ""}
    </div>
  );
};


export const Status1 = styled.div`
font-size: 11px;
margin-bottom: 20px;
position: absolute;
font-weight: 600;
`

export const Status2 = styled.div`
font-size: 11px;
margin-top: 20px;
margin-left:100px;
position: absolute;
font-weight: 600;
`
export const Status3 = styled.div`
font-size: 11px;
margin-left: 140px;
position: absolute;
font-weight: 600;
`

export const Bolinha1 = styled.div`
    background-color: #799F00;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    position: absolute;
    top: 351px;
    margin-left: 40px;
`
export const Bolinha2 = styled.div`
    background-color: #799F00;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    position: absolute;
    top: 351px;
    margin-left: 115px;
`
export const Bolinha3 = styled.div`
background-color: #799F00;
width: 15px;
height: 15px;
border-radius: 20px;
position: absolute;
top: 351px;
margin-left: 190px;
`