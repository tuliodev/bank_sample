import React from 'react';

import {
  Container, InputWrapper, InputLabel, StyledInput, Users, UsersAvatar,
} from '../assets/css/Input';
import UserImg from '../assets/img/profile.jpeg';

export default function Input() {
  return (
    <Container>
      <InputWrapper>
        <InputLabel>Enter amount</InputLabel>
        <StyledInput disableUnderline placeholder="$1,24" />
      </InputWrapper>

      <Users>
        <UsersAvatar src={UserImg} />
        <UsersAvatar src={UserImg} />
      </Users>
    </Container>
  );
}
