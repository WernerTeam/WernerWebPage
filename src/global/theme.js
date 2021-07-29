import styled, { createGlobalStyle }  from 'styled-components'

export const Background = createGlobalStyle`
body {
    background-color: #799F00;
}
`

export const Container = styled.div`
  margin: 0 auto;
  width: 272px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

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

// export const Background = styled.div`
//     background-color: #799F00;
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     justify-content: center;
//     padding-top: 40px;
//     display: flex;
// `

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
border: 0px;
cursor: pointer;
color: #ffffff;
&:hover {
      background-color: #343a40;
      }
`

export const Block = styled.div`
    background-color: #ffffff;
    height: 390px;
    width: 300px;
    border-radius: 10px;
    box-shadow: 50px;
    /* padding: 30px; */
    padding-top: 30px;
`