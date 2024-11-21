'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useSession } from 'next-auth/react'; 
import Link from 'next/link';

export default function SimpleMenu() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // Open and close functions for the menu
  const handleMenuOpen = () => {
    setAnchorEl(buttonRef.current);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Create a ref for the IconButton
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 300,
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      {/* Icon button with ref */}
      <IconButton
        aria-label="menu"
        ref={buttonRef} // Attach ref here
        onClick={handleMenuOpen}
        sx={{ color: 'black' }}
      >
        <MenuIcon />
      </IconButton>

      {/* Menu component with anchorEl and close handler */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {/* Home Link */}
        <MenuItem component={Link} href="/" onClick={handleMenuClose}>
          Home
        </MenuItem>

        {session ? (
          // Render these items when signed in
          <>
            <MenuItem component={Link} href="/auth/signout" onClick={handleMenuClose}>
              Sign Out
            </MenuItem>
          </>
        ) : (
          // Render these items when signed out
          <>
            <MenuItem component={Link} href="/auth/signin" onClick={handleMenuClose}>
              Sign In
            </MenuItem>

            <MenuItem component={Link} href="/auth/signup" onClick={handleMenuClose}>
              Sign Up
            </MenuItem>
          </>
        )}
      </Menu>
    </Box>
  );
}
