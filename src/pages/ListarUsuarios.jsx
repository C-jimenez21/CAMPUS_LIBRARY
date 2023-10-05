import React, { useEffect, useState } from 'react'
import { getLoansByDiferentParam } from '../API/auth'
import { useAuth } from '../context/authContext'
import BasicTable from '../components/TableReserves'
import { Container } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";
import TableEmployee from '../components/TableEmployee'
import { useProducts } from '../context/userContext'
import TableUsers from '../components/TableUsers'


export default function ListarUsuarios() {
    const [isLoad, setLoad] = useState(true)

    const { ShowAllUsers, usuarios } = useProducts()

    useEffect(() => {
        ShowAllUsers()
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
                    <TableUsers data={usuarios} loan={false} />
                )
                }
            </Container>
        </>
    )
}
