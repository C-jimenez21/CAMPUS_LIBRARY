import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';

export default function NavBarUser() {
    
    const pages = [{ 'name': "Products", 'link': "/products" }, { 'name': "Loans", 'link': "/loans" }, { 'name': "Reserves", 'link': "/reserves" }];
    //const pages = [{ 'name': "Añadir Libros", 'link': "/addBooks" }, { 'name': "Solicitudes", 'link': "/requests" }, { 'name': "Libros", 'link': "/books" }];
    //const pages = [{ 'name': "Añadir Empleados", 'link': "/addEmployee" }, { 'name': "Listar Empleados", 'link': "/listEmployee" }, { 'name': "Listar Usuarios", 'link': "/listUsers" }, { 'name': "Estadisticas", 'link': "/stadistics" } ];




    const { logOut, user } = useAuth()

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <React.Fragment>
            <AppBar position="sticky" color='default'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Link to={"/products"}>
                                <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/8074/8074804.png" />
                            </Link>


                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link to={page.link}>
                                                {page.name}
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Link to={"/products"}>
                                <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/8074/8074804.png" />
                            </Link>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                
                                <Button
                                        key={page.name}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, mr: 8, color: 'black', display: 'block' }}
                                    >
                                <Link to={page.link}>
                                        {page.name}
                                </Link>
                                    </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ pl: 2 }}>
                             
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="https://cdn.dribbble.com/users/219762/screenshots/2351573/saitama.png" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >

                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"><Link to={"/profile"}>Profile</Link></Typography>
                                </MenuItem>

                                <MenuItem onClick={() => logOut()}>
                                    <Typography textAlign="center"><Link to={"/login"}>Log Out</Link></Typography>
                                </MenuItem>

                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    );
}
