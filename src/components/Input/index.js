import React from "react";
import { InputElement, Container, Title } from "./InputElements";
import { PrimaryFont, SecundaryFont, TertiaryFont, Background } from '../../global/theme'

export const Input = (props) => {
  return (
    <Container>
            <Title> {props.title}</Title>
          <InputElement type="text" placeholder={props.placeholder} style={{width: props.width}}/>
    </Container>
  );
};
