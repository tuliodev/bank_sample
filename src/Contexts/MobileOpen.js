import React, { createContext } from 'react';

export const MobileOpenContext = createContext(false);

function MobileOpenProvider({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (

    <MobileOpenContext.Provider value={{ mobileOpen, handleDrawerToggle }}>
      {children}
    </MobileOpenContext.Provider>
  );
}

export default MobileOpenProvider;
