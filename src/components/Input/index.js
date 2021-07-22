import React from "react";
import { InputElement, Container, Title } from "./InputElements";

export const Input = (props) => {
  return (
    <Container>
            <Title style={{marginLeft: props.marginLeft}}> {props.title}</Title>
          <InputElement type="text" placeholder={props.placeholder} style={{width: props.width, marginLeft: props.marginLeft}}/>
    </Container>
  );
};
