import styled, { createGlobalStyle } from "styled-components";

export const Background = createGlobalStyle`
body {
    background-color: #ffffff;
}
`
export const Container = styled.div`
  margin: 0 auto;
  width: 272px;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

export const Block = styled.div`
  background-color: #799f00;
  border-radius: 10px;
  box-shadow: 10px;
  width: 272px;
  height: 198px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const Logo = styled.div`
  margin-bottom: 40px;
  display: inline-block;
  text-align: center;
`;

export const InputElement = styled.input`
  background: #ffffff;
  border-radius: 5px;
  border: 0;
  width: 200px;
  height: 35px;
  font-size: 13px;
  box-shadow: 10px;
  padding-left: 10px;
  margin-top: 10px;
`;

export const Msg = styled.div`
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 10px;
  margin-left: 67px;
  margin-top: 8px;
`;
