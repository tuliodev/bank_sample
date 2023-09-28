import React from 'react';
import MenuAppBar from '../components/MenuAppBar';
import MobileOpenProvider from '../Contexts/MobileOpen';

export default function Home() {
  return (
    <MobileOpenProvider>
      <MenuAppBar />
    </MobileOpenProvider>
  );
}
