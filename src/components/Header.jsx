import { Button } from '@mui/material';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <div style={{
      position: 'absolute',
      right: 32,

    }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        margin: '0 5px',
      }}
      >
        <Button variant="text"><SearchIcon style={{ color: 'A4B4CB' }} /></Button>
        <Button variant="text"><NotificationsIcon style={{ color: 'A4B4CB' }} /></Button>
        <Button variant="text">
          {' '}
          <PersonIcon style={{ color: 'A4B4CB' }} />
        </Button>

      </div>
    </div>
  );
}
