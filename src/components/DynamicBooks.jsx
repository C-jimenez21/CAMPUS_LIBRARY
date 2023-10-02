import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Grid, Container } from '@mui/material';
import BookCard from './BookCard'; // Importa el componente BookCard
const url = import.meta.env

const DynamicBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
  console.log("url",`http://${url.VITE_HOSTNAME}:${url.VITE_PORT_BACKEND}/api/Products`);
    async function bringData() {
      try {
        const response = await axios.get(`http://${url.VITE_HOSTNAME}:${url.VITE_PORT_BACKEND}/api/Products`);
        console.log(response.data);
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }
  
    useEffect(() => {
      //console.log(`http://${url.VITE_HOSTNAME}:${url.VITE_PORT_BACKEND}/api/User/pruebas`);
      // Realizar una solicitud a una API utilizando Axios
      bringData()
    }, []); // El segundo argumento vacío indica que este efecto se ejecutará solo una vez, similar a componentDidMount en clases
  

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <BookCard
              title={book.name}
              coverImage={book.image}
              onClick={() => {
                <Link to="/login"></Link>
                // Lógica para ver más detalles del libro
                console.log(`Ver más sobre ${book.title}`);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DynamicBooks;
