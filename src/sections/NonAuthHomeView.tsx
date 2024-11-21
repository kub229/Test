// src/sections/NonAuthHomeView.tsx

'use client';

import { useSession } from 'next-auth/react';
import Typography from '@mui/material/Typography';

export default function NonAuthHomeView() {
  const { status } = useSession();

  if (status === 'loading') {
    return <Typography variant="h5" align="center">Loading</Typography>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typography variant="h4">Log in required</Typography>
    </div>
  );
}