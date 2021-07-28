import React from "react";
import { InputElement, Container, Title } from "./InputElements";

export const Input = (props) => {
  return (
    <Container>
            <Title style={{marginLeft: props.marginLeft}}> {props.title}</Title>
          <InputElement value={props.value} onChange={props.onChange} id="input" type={props.type} placeholder={props.placeholder} style={{width: props.width, marginLeft: props.marginLeft}}/>
    </Container>
  );
};
