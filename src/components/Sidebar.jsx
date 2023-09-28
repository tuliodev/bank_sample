import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

import ReceiptIcon from '@mui/icons-material/Receipt';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {
  Drawer,
  List, ListItem, ListItemButton, ListItemText, Typography,
} from '@mui/material';

import { MobileOpenContext } from '../Contexts/MobileOpen';

const drawerWidth = 230;
export default function SideBar(props) {
  const { window } = props;

  const { mobileOpen, handleDrawerToggle } = React.useContext(MobileOpenContext);

  const mainListIcons = [
    <HomeIcon style={{ color: 'A4B4CB', width: '20%' }} />,
    <ReceiptIcon style={{ color: 'A4B4CB', width: '20%' }} />,
    <CreditCardIcon style={{ color: 'A4B4CB', width: '20%' }} />,
    <DataSaverOffIcon style={{ color: 'A4B4CB', width: '20%' }} />,
  ];

  const helpListIcons = [
    <InfoIcon style={{ color: 'A4B4CB', width: '20%' }} />,
    <SettingsIcon style={{ color: 'A4B4CB', width: '20%' }} />,
  ];

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40%', width: '90%',
      }}
      >
        <AccountBalanceIcon style={{ color: '0177FD' }} />

        <Typography variant="h6" component="div" style={{ paddingLeft: 10, fontWeight: 'bold' }}>
          SampleBank
        </Typography>
      </div>

      <List style={{ left: 15 }}>
        {['Dashboard', 'Invoices', 'My Wallets', 'Activity'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {mainListIcons[index]}
              <ListItemText primary={text} style={{ fontFamily: 'Roboto' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List style={{
        position: 'absolute', bottom: 10, left: 15, width: '100%',
      }}
      >
        {['Get help', 'Settings'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {helpListIcons[index]}
              <ListItemText primary={text} style={{ fontFamily: 'Roboto' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}
