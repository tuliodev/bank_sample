import React from 'react';
import {
  Container, MainText, SubText, TextContainer,
} from '../assets/css/Statistic';

export default function Statistic({ logo, value, label }) {
  return (
    <Container>
      {logo}
      <TextContainer>
        <MainText>
          {value}
        </MainText>
        <SubText>
          {label}
        </SubText>
      </TextContainer>
    </Container>
  );
}
