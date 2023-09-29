import React from 'react';

import {
  Container, InputWrapper, InputLabel, StyledInput, Users, UsersAvatar,
} from '../assets/css/Input';

export default function Input() {
  return (
    <Container>
      <InputWrapper>
        <InputLabel>Enter amount</InputLabel>
        <StyledInput placeholder="$1,24" />
      </InputWrapper>

      <Users>
        <UsersAvatar />
        <UsersAvatar />
      </Users>
    </Container>
  );
}
