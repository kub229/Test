// src/sections/SignUpView.tsx

'use client'; // This makes the component a Client Component

import { signIn } from 'next-auth/react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function SignUpView() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sign Up using a Google account.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => signIn('google')} // Trigger Google sign-in
        style={{ marginTop: '20px' }}
      >
        Sign Up with Google
      </Button>
    </div>
  );
}
