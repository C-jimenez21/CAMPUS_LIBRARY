import React, {useEffect, useState} from 'react'
import "../css/Products.css"

import axios from 'axios';
const url = import.meta.env
export default function PruebaLista() {
    const [products, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    
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
        <main className='products'>
            <ul>
                {products.map(product =>(
                <li key={product._id}>
                    <img 
                        src={product.image} 
                        alt={product.name }
                    />
                    <div>
                        <strong>{product.name}</strong>
                    </div>
                    <div>
                        <button>
                            Resevar
                        </button>
                    </div>
                    </li>
                    ))}
            </ul>
        </main>
    )
}
