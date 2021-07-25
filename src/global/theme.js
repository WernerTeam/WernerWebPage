import styled from 'styled-components'

export const PrimaryFont = styled.div`
    font-size: 24px;
    color: #ffffff;
    text-align: center;
    padding-bottom: 20px;
`
export const SecundaryFont = styled.div`
    color: #111111;

`
export const TertiaryFont = styled.div`
    font-size: 12;
    color: #838383;

`
export const Background = styled.div`
    background-color: #799F00;
    width: 100%;
    height: 100%;
    position: absolute;
    justify-content: center;
    padding-top: 40px;
    display: flex;
`

export const Button = styled.button`
background: #111111;
border-radius: 30px;
width: 160px;
height: 33px;
margin-top: 20px;
margin-left: 55px;
border: 0px;
cursor: pointer;
font-size: 11px;
&:hover {
      background-color: #343a40;
      
      }
`
export const Submit = styled.input`
background: #111111;
border-radius: 30px;
width: 160px;
height: 33px;
margin-top: 20px;
margin-left: 55px;
border: 0px;
cursor: pointer;
color: #ffffff;
&:hover {
      background-color: #343a40;
      
      }
`


export const Block = styled.div`
    background-color: #ffffff;
    height: 420px;
    width: 300px;
    border-radius: 10px;
    box-shadow: 50px;
    padding: 30px;
    padding-top: 30px;
`
export const styleAutocomplete = {
    height: "44px",
    border: "1px solid #dfe1e5",
    borderRadius: "24px",
    backgroundColor: "red",
    boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
    hoverBackgroundColor: "#eee",
    color: "#212121",
    fontSize: "16px",
    fontFamily: "Arial",
    iconColor: "grey",
    lineColor: "rgb(232, 234, 237)",
    placeholderColor: "grey",
    clearIconMargin: '3px 14px 0 0',
    searchIconMargin: '0 0 0 16px'
  };