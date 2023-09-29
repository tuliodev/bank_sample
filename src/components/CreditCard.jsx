import { Typography } from '@mui/material';
import React from 'react';

import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { CardDiv } from '../assets/css/CreditCard';

export default function CreditCard() {
  return (
    <CardDiv>
      <Typography variant="h4" component="h4" fontFamily="sans-serif" style={{ marginRight: '4.5em' }}>My Card</Typography>
      <Cards
        number="4438 0820 6810 0926"
        expiry="10/20"
        cvc="155"
        name="TULIO D RESENDE"
      />
    </CardDiv>
  );
}
