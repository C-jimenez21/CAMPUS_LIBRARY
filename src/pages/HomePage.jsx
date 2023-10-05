import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuIcon from '@mui/icons-material/Menu';
import DynamicBooks from '../components/DynamicBooks'
import { Link } from 'react-router-dom';
import DynamicTable from '../components/BookList';

export default function HomePage() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='fixed' color="transparent">
          <Toolbar>
            <MenuBookIcon color='primary'></MenuBookIcon>
            <Typography color='primary' variant="h6" component="div" sx={{ flexGrow: 1, ml: 3 }}>

              Campus Library
            </Typography>

            <Link to="/register" >
              <Button variant='contained' color="primary">Register</Button>
            </Link>
            <Link to="/login">
              <Button sx={{ ml: 3 }} variant='contained' color="success">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
