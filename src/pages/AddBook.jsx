import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
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
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { postProduct } from '../API/auth'
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

export default function AddBook() {
    const [errors, setErrors] = useState([])
    const { register, handleSubmit } = useForm();

    const Navigate = useNavigate();

    const handleSubmitMUI = handleSubmit(async (values) => {
        try {
            const { stock, pages, qualify } = values
            let formatData = { ...values, "stock": parseInt(stock), "pages": Number(pages), "qualify": Number(qualify) }
            const res = await postProduct(formatData);
            alert(res.data.message)
        } catch (errors) {
            console.log(errors);
            setErrors(errors.response.data.error);
        }

    })

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])


    const categorias = [
        "Self-help",
        "Science fiction", 
        "comedy",
        "Romance",
        "Business",
        "Dystopian",
        "Literatura infantil",
        "Children's fiction",
        "Fantasy",
        "Fiction"
    ]


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
                        Añadir Libro
                    </Typography>
                    <Stack sx={{ width: '100%', mt: 6 }} spacing={1}>
                        {
                            errors.map((error, i) => (
                                <Alert severity="error" key={i}>
                                    {error}
                                </Alert>
                            ))
                        }
                    </Stack>

                    <Box component="form" noValidate onSubmit={handleSubmitMUI} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    type='text'
                                    fullWidth
                                    name="name"
                                    id="name"
                                    label="Name"
                                    autoComplete='true'
                                    {...register('name', { required: true })}
                                />

                            </Grid>
                            <Grid item xs={6} >
                                <TextField
                                    type='text'
                                    fullWidth
                                    name="author"
                                    id="author"
                                    label="Author"
                                    autoComplete='true'
                                    {...register('author', { required: false })}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    type='text'

                                    fullWidth
                                    id="company"
                                    label="Company"
                                    name="company"
                                    autoComplete='true'

                                    {...register('company', { required: false })}

                                />

                            </Grid>
                            <Grid item xs={8} >
                                <TextField
                                    type='text'
                                    required
                                    fullWidth
                                    name="serial"
                                    id="serial"
                                    label="Serial"
                                    autoComplete='true'
                                    {...register('serial', { required: true })}
                                />

                            </Grid>
                            <Grid item xs={4}>

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        required
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Category"
                                        {...register('category', { required: true })}>
                                            <MenuItem value="Fantasy" selected>Fantasy</MenuItem>

                                        {
                                        categorias.map((name, index) => (
                                            <MenuItem key={index} value={name}>{name}</MenuItem>
                                        ))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField

                                    fullWidth
                                    name="description"
                                    label="Description"
                                    type="text"
                                    multiline
                                    maxRows={4}
                                    id="description"

                                    {...register('description', { required: false })}
                                />

                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    type="date"
                                    fullWidth
                                    name="date_created"
                                    label="Date of creation"
                                    id="date_created"
                                    {...register('date_created', { required: false })}
                                />

                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    required
                                    fullWidth
                                    name="stock"
                                    label="Stock"
                                    type="number"
                                    id="stock"
                                    autoComplete='true'

                                    {...register('stock', { required: true })}
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <TextField

                                    fullWidth
                                    name="image"
                                    label="Portada"
                                    type="text"
                                    id="image"

                                    {...register('image', { required: false })}
                                />

                            </Grid>
                            <Grid item xs={6}>
                                <TextField

                                    fullWidth
                                    name="qualify"
                                    label="Qualify"
                                    type="number"
                                    id="qualify"
                                    autoComplete='true'

                                    {...register('qualify', { required: false })}
                                />

                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="pages"
                                    label="Pages"
                                    type="number"
                                    id="pages"
                                    autoComplete='true'

                                    {...register('pages', { required: true })}
                                />

                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Añadir
                        </Button>

                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/requests" variant="body2">
                                    Volver a la pagina de inicio
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container >
        </>
    );
}