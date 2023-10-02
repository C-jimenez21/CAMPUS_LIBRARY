import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export default function LoadingCircle() {
  return (
    <Box sx={{ display: 'flex',
    justifyContent: 'center', // Centrar horizontalmente
    alignItems: 'center',     // Centrar verticalmente
    height: '100vh'}}>
    <CircularProgress />
  </Box>
    )

}
