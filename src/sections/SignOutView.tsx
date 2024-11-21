// src/sections/SignOutView.tsx

'use client';

import { useSession, signOut } from 'next-auth/react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function SignOutView() {
  const { status } = useSession();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' }); // Sign out and redirect to the home page
  };

  if (status === 'loading') {
    return <Typography variant="h5" align="center">Loading...</Typography>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typography variant="h4" gutterBottom>
        Sign Out
      </Typography>
      <Typography variant="body1" gutterBottom>
        Confirm Sign Out.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSignOut} // Call handleSignOut on click
        style={{ marginTop: '20px' }}
      >
        Sign Out
      </Button>
    </div>
  );
}