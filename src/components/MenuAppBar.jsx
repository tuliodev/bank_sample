import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import IconButton from '@mui/material/IconButton';

import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import SideBar from './Sidebar';
import { MobileOpenContext } from '../Contexts/MobileOpen';

const drawerWidth = 230;

export default function MenuAppBar() {
  const { handleDrawerToggle } = React.useContext(MobileOpenContext);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'white',
          boxShadow: 'none',
        }}

      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
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

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      />
      <SideBar mobileOpen />
    </Box>
  );
}
