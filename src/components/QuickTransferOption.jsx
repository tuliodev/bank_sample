import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

import { Container } from '../assets/css/QuickTransferOption';

export default function QuickTransferOption({ icon, label }) {
  return (
    <Container>
      <Box
        sx={{
          width: '30%',
          height: '30%',
          borderRadius: 2,
        }}
      >
        {icon}
      </Box>

      <Typography>{label}</Typography>
    </Container>
  );
}
