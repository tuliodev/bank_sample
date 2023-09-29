/* eslint-disable react/destructuring-assignment */
import { Button } from '@mui/material';
import React from 'react';

export default function StatusButton({ status }) {
  return (
    status === 'Success' ? (
      <Button variant="contained" color="success">
        { status }
      </Button>
    ) : (
      <Button variant="contained" color="warning">
        { status }
      </Button>
    )

  );
}
