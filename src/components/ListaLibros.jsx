
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const url = import.meta.env

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode ===  '#bbb',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   width: "340px",
//   height: "140px",
//   color: theme.palette.text.secondary,
// }));

export default function ListaLibros() {
    const [libros, setBooks] = useState([]);
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
  const redirect = () => {
    
  }
  
    useEffect(() => {
      //console.log(`http://${url.VITE_HOSTNAME}:${url.VITE_PORT_BACKEND}/api/User/pruebas`);
      // Realizar una solicitud a una API utilizando Axios
      bringData()
    }, []); // El segundo argumento vacío indica que este efecto se ejecutará solo una vez, similar a componentDidMount en clases
  

  return (
    // <Container>
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={{ xs: 2, md: 3 }} columns={{xs:12, sm:6, md:3}} >
    //     {Array.from(Array(21)).map((_, index) => (
    //       <Grid item xs={10} sm={4} md={2} key={index}>
    //         <Item>xs=2</Item>
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Box>
    // </Container>

    <>
                
<Container maxWidth="md">
    <Grid container spacing={2} id="contenedor" >
      {libros.map((libro) => (
        <Grid item xs={10} md={5} key={libro.id} height="auto">
        <a id={libros._id} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={libro.image} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{libro.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{libro.author}</p>
            </div>
        </a>
        </Grid>
      ))}
    </Grid>
</Container> 


</>
  );
}