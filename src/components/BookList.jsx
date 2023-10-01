//components
import { useState, useEffect } from 'react'
import axios from 'axios';
const url = import.meta.env
export default async function BookList() {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const listar = async () =>{
      let response = await axios.get(`http://${url.VITE_HOSTNAME}:${url.VITE_PORT_BACKEND}/profile`,{
        headers: {'Content-Type': 'application/json'}
      })
      
    }
    useEffect(() => {
      // Realizar la petición a la API
      //fetch(`http://${url.VITE_HOSTNAME}:${url.VITE_PORT_BACKEND}/profile`)
      // fetch(`http://127.10.10.1:5006/profile`)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     // Almacenar los datos de la API en el estado
      //     setBooks(data); 
      //     setIsLoading(false);
      //   });
      listar()
    }, []);
  
    // Renderizar la lista de libros
    return (
      <div>
        {isLoading && <div>Cargando...</div>}
        {!isLoading && (
          <ul>
            {books.map((book) => (
              <li key={book._id}>
                {book.name}
                </li>
             
            ))}
          </ul>
        )}
      </div>
    );
  }
  