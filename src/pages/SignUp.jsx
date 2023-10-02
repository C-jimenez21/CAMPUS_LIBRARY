import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

import { useForm } from 'react-hook-form';

import { useAuth } from '../context/authContext';

import { useNavigate, Link } from 'react-router-dom';
// TODO remove, this demo shouldn't need to reset the theme.


export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signUpRegister, isAuthenticated, errors: registerErrors } = useAuth()

  const Navigate = useNavigate();

  const handleSubmitMUI = handleSubmit(async (values) => {
    let dataUser = { ...values, rol: "Usuario" }
    console.log(dataUser);
    signUpRegister(dataUser);
  })

  useEffect(() => {
    if (isAuthenticated) Navigate('/profile')
  }, [isAuthenticated])

  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: 'brown' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Register
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
              <Grid item xs={6} >
                <TextField
                  type='text'
                  fullWidth
                  name="name"
                  id="name"
                  label="name"
                  autoComplete='true'
                  {...register('name', { required: false })}
                />

              </Grid>
              <Grid item xs={6} >
                <TextField
                  type='text'
                  fullWidth
                  name="lastname"
                  id="lastname"
                  label="lastname"
                  autoComplete='true'
                  {...register('lastname', { required: false })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type='email'
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete='true'

                  {...register('email', { required: true })}

                />
                {
                  errors.email && <Alert severity="warning">email is required</Alert>

                }
              </Grid>
              <Grid item xs={8} >
                <TextField
                  type='text'
                  required
                  fullWidth
                  name="username"
                  id="username"
                  label="Username"
                  autoComplete='true'
                  {...register('username', { required: true })}
                />
                {
                  errors.username && <Alert severity="warning">Username is required</Alert>

                }
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name="phone"
                  label="phone"
                  type="number"
                  id="phone"
                  autoComplete='true'

                  {...register('phone', { required: false })}
                />

              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete='true'

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
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>



    </>
  );
}