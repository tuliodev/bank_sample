import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

import { Container } from '../assets/styles/QuickTransferOption';

export default function QuickTransferOption({ icon, label }) {
  return (
    <Container>
      <Box
        sx={{
          borderRadius: 2,
        }}
      >
        {icon}
      </Box>

      <Typography>{label}</Typography>
    </Container>
  );
}
