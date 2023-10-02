import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuIcon from '@mui/icons-material/Menu';

import {  Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <MenuBookIcon></MenuBookIcon>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml:3 }}>

          Campus Library
        </Typography>

        <Link to="/register" >
            <Button variant='contained' color="inherit">Register</Button>
        </Link>
        <Link to="/login">
            <Button sx={{ml:3}} variant='contained' color="inherit">Login</Button>
        </Link>
      </Toolbar>
    </AppBar>
  </Box>
    <Box sx={{ display: 'flex',
    justifyContent: 'center', // Centrar horizontalmente
    alignItems: 'center',     // Centrar verticalmente
    height: '100vh'}}>
   <img  src='https://wallpaperaccess.com/full/521035.jpg'/>
  </Box>
    </>
  )
}
