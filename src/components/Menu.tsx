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
          <HomeIcon sx={{ mr: 1 }} />
          Domov
        </MenuItem>

        {session ? (
          // Render these items when signed in
          <>
            <MenuItem component={Link} href="/auth/odhlasenie" onClick={handleMenuClose}>
              <LoginIcon sx={{ mr: 1 }} />
              Odhlásiť
            </MenuItem>
          </>
        ) : (
          // Render these items when signed out
          <>
            <MenuItem component={Link} href="/auth/prihlasenie" onClick={handleMenuClose}>
              <LoginIcon sx={{ mr: 1 }} />
              Prihlásenie
            </MenuItem>

            <MenuItem component={Link} href="/auth/registracia" onClick={handleMenuClose}>
              <PersonAddIcon sx={{ mr: 1 }} />
              Registrácia
            </MenuItem>
          </>
        )}
      </Menu>
    </Box>
  );
}


// 'use client';

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import LoginIcon from '@mui/icons-material/Login';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import HomeIcon from '@mui/icons-material/Home';
// import { useSession } from 'next-auth/react'; // Import necessary hooks
// import Link from 'next/link';

// export default function SimpleBottomNavigation() {
//   const [value, setValue] = React.useState(0);
//   const { data: session } = useSession(); // Get session information

//   return (
//     <Box
//       sx={{
//         width: '100%',
//         maxWidth: 300, // Set this value to control the narrowness
//         margin: '0 auto', // Center it horizontally
//       }}
//     >
//       <BottomNavigation
//         sx={{
//           backgroundColor: 'white',
//           color: 'black',
//           height: 64, // Increase height to make labels visible
//         }}
//         showLabels
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       >
//         {/* Always visible Home */}
//         <BottomNavigationAction
//           label="Domov"
//           icon={<HomeIcon />}
//           component={Link}
//           href="/"
//         />

//         {session ? (
//           // Render these items when signed in
//           <>
            
//             {/* Sign Out */}
//             <BottomNavigationAction
//               label="Odhlásiť"
//               icon={<LoginIcon />} // Use LoginIcon for "Odhlásiť"
//               component={Link}
//               href="/auth/odhlasenie" // Add the link for adding content
//               //onClick={() => signOut()} // Call signOut to log out
//             />
//           </>
//         ) : (
//           // Render these items when signed out
//           <>
    
    
//             {/* Login */}
//             <BottomNavigationAction
//               label="Prihlásenie"
//               icon={<LoginIcon />}
//               component={Link}
//               href="/auth/prihlasenie"
//             />

//             {/* Register */}
//             <BottomNavigationAction
//               label="Registrácia"
//               icon={<PersonAddIcon />}
//               component={Link}
//               href="/auth/registracia"
//             />
//           </>
//         )}
//       </BottomNavigation>
//     </Box>
//   );
// }

