import React from "react";
import styled from "styled-components"
import seta from '../../assets/seta.png'

export const Seta = (props) => {

  return (
    <div style={{marginTop: "60px", marginLeft: "10px"}}>
    <Status1> {(props.status == "C" | props.status == "E" | props.status == "L")  ? "Desenvolvimento": ""}</Status1> 
    <Status3> {(props.status == "L") ? "Preparando Entrega" : " "}</Status3> 
    <img src={seta} style={{marginTop: "40px"}}/>
    <Status2> {(props.status == "L" | props.status == "E") ? "Produção" : " "}</Status2> 
    {(props.status == "C" | props.status == "E" | props.status == "L") ? <Bolinha1/> : ""}
    {(props.status == "L" | props.status == "E") ? <Bolinha2/> : ""}
    {(props.status == "L") ? <Bolinha3/> : ""}
    </div>
  );
};

export const Status1 = styled.div`
font-size: 11px;
position: absolute;
color: black;
font-weight: 600;
`

export const Status2 = styled.div`
font-size: 11px;
margin-top: 35px;
margin-left:100px;
position: absolute;
color: black;
font-weight: 600;
`
export const Status3 = styled.div`
font-size: 11px;
margin-left: 130px;
position: absolute;
font-weight: 600;
color: black;
`

export const Bolinha1 = styled.div`
    background-color: #799F00;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    position: absolute;
    top: 417px;
    margin-left: 45px;
`
export const Bolinha2 = styled.div`
    background-color: #799F00;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    position: absolute;
    top: 417px;
    margin-left: 115px;
`
export const Bolinha3 = styled.div`
background-color: #799F00;
width: 15px;
height: 15px;
border-radius: 20px;
position: absolute;
top: 417px;
margin-left: 185px;
`

export const Container = styled.div`
  margin: 0 auto;
  width: 272px;
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
