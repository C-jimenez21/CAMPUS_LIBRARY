import React, { useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import BookIcon from '@mui/icons-material/Book';
import Alert from '@mui/material/Alert';
import { useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';

import { useAuth } from '../context/authContext';

import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signInLogin, isAuthenticated, logOut, user, errors: registerErrors } = useAuth()

  const handleSubmitMUI = handleSubmit(async (values) => {
    signInLogin(values);

  })

  const Navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated)
      switch (user.rol) {
        case "Usuario":
          Navigate('/products');
          break;
        case "Empleado":
          Navigate('/requests');
          break;
        case "Admin":
          Navigate('/listUsers');
          break
        default:
          logOut();
          Navigate('/Notfound');
          break;
      }
  }, [isAuthenticated])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'brown' }}>
          <BookIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Login
        </Typography>
        <Stack sx={{ width: '100%', mt: 6 }} spacing={1}>
          {
            registerErrors.map((error, i) => (
              <Alert severity="error" key={i}>
                {error}
              </Alert>
            ))
          }
        </Stack>

        <Box component="form" noValidate onSubmit={handleSubmitMUI} sx={{ mt: 3 }}>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"

                {...register('email', { required: true })}
              />
              {
                errors.email && <Alert severity="warning">email is required</Alert>
              }
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"

                {...register('password', { required: true })}
              />
              {
                errors.password && <Alert severity="warning">password is required</Alert>

              }
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/register" variant="body2">
                Dont have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

