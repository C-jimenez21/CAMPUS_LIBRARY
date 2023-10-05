import React, { useEffect, useState } from 'react'
import { getLoansByDiferentParam } from '../API/auth'
import { useAuth } from '../context/authContext'
import BasicTable from '../components/TableReserves'
import { Container } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";
import TableEmployee from '../components/TableEmployee'
import { useProducts } from '../context/userContext'


export default function RequestsUsers() {
    const [isLoad, setLoad] = useState(true)

    const { mostrarLoansPendientes, peticiones } = useProducts()
  console.log(peticiones);
    useEffect(() => {
        mostrarLoansPendientes()
        setLoad(false)
    }, [])

    return (
        <>
            <Container maxWidth="xl" sx={{ mt: 5 }}>
                {isLoad ? (<Box sx={{
                    display: 'flex',
                    justifyContent: 'center', // Centrar horizontalmente
                    alignItems: 'center',     // Centrar verticalmente
                    height: '70vh'
                }}>
                    <CircularProgress />
                </Box>
                ) : (
                    <TableEmployee data={peticiones} loan={true} />
                )
                }
            </Container>
        </>
    )
}
