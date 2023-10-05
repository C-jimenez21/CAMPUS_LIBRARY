import React, { useEffect, useState } from 'react'
import { getProducts } from '../API/auth'
import { useAuth } from '../context/authContext'
import BasicTable from '../components/TableReserves'
import { Container } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";
import ProductsList from './ProductList'

export default function BookList() {
    const [books, setBooks] = useState([])
    const [isLoad, setLoad] = useState(true)

    const BringData = async () => {
        try {
            const res = await getProducts()
            setBooks(res.data)
            setLoad(false)
        } catch (error) {
            console.log(error);
            setLoad(false);
        }
    }

    useEffect(() => {
        BringData()
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
                    <ProductsList data={books}  />
                )
                }
            </Container>
        </>

    )
}
