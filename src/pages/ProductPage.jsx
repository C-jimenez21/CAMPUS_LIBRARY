import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import dayjs from "dayjs";
import { useProducts } from '../context/userContext'
import { useParams, useNavigate } from 'react-router-dom'
import { Grid, Container, Box, Button, Stack, Alert } from '@mui/material'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAuth } from '../context/authContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "400px",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: "20px"
};

export default function ProductPage() {

    const { getProductID, product, postLoanUser, errors: ReserveAndLoanError } = useProducts()
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const params = useParams()
    const Navigate = useNavigate()
    const handleSubmitMUI = handleSubmit(async (values) => {
     try {
        const formatData = { ...values, "user": user.email, "product": product.serial }
        const res = await postLoanUser(formatData)
        console.log({ "values form": formatData, "response": res });
        Navigate(`/loans/${user.email}`)
     } catch (error) {
         console.log(error);        
        Navigate("/Notfound")
     }
    })

    async function bringData(){
     try {
        await getProductID(params.id)
     } catch (error) {
        alert(error)
     }
    }
    
    useEffect(() => {
        if (params.id) {
            bringData() 
        }
    }, [open])

    return (
        <>
            <div>
               
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Solicitar Prestamo
                        </Typography>
                        <Stack sx={{ width: '100%', mt: 2 }} spacing={1}>
                        {
                errors.endDate && <Alert severity="warning">endDate is required</Alert>

              }
          {
            ReserveAndLoanError.map((error, i) => (
              <Alert severity="error" key={i}>
                {error}
              </Alert>
            ))
          }
        </Stack>
                        <Box component="form" noValidate onSubmit={handleSubmitMUI} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>

                                <Grid item xs={6}>
                                    <label htmlFor="date">fecha inicio</label>
                                    <input required type='date' className='w-full bg-zinc-100 text-black px-4 py-2 rounded-md my-2'
                                        value={(dayjs().format('YYYY-MM-DD'))}
                                        {...register('beguinDate', { required: true })}
                                        readOnly
                                    />

                                </Grid>
                                <Grid item xs={6}>
                                    <label htmlFor="date">fecha maxima fin</label>
                                    <input
                                        type='date'
                                        min={dayjs().format('YYYY-MM-DD')} max={(dayjs().add(15, 'day')).format('YYYY-MM-DD')}
                                        className='w-full bg-zinc-100 text-black px-4 py-2 rounded-md my-2'
                                        required


                                        {...register('endDate', { required: true })}
                                    />

                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Solicitar
                            </Button>
                        </Box>

                    </Box>
                </Modal>
            </div>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center', // Centrar horizontalmente
                alignItems: 'center',     // Centrar verticalmente
                height: '100vh'
            }}>
                <Container maxWidth="sm">
                    <Grid container spacing={0} >
                        
                            <Grid item xs={12} md={12} key={product.id} height="auto">
                                <div className="flex flex-col items-center bg-white border border-black-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img className="object-fill bg-dark w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg ml-2" src={product.image} alt={product.name} />
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{product.name}</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Serial: {product.serial}</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Author: {product.author}</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Pages: {product.pages}</p>


                                        <Stack direction="row" spacing={2}>
                                        { (product.stock <= 0) ? <Button disabled variant="contained"  onClick={handleOpen}>
                                                Solicitar prestamo
                                            </Button> : <Button  variant="contained"  onClick={handleOpen}>
                                                Solicitar prestamo
                                            </Button> } 
                                            <Button  variant="outlined" >
                                                Reservar
                                            </Button>
                                        </Stack>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
