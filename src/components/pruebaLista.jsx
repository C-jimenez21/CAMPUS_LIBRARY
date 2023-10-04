import React, {useEffect, useState} from 'react'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import axios from 'axios';
const url = import.meta.env
import responseForProducts from "../API/JSON/Products.json"

import "../css/Products.css"
import { Link } from 'react-router-dom';

export default function PruebaLista() {
    const [products, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    
    async function bringData() {
      try {
        console.log(responseForProducts.products);
        setBooks(responseForProducts.products);
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
                  <span>Stock: {product.stock}</span>
                    <img 
                        src={product.image} 
                        alt={product.name }
                    />
                    <div>
                  <strong>{product.name}</strong><br />
                    </div>
                    <div>
                        <button>
                            <Link to={`/bokId/${product.serial}`}><ReadMoreIcon /></Link>
                        </button>
                    </div>
                    </li>
                    ))}
            </ul>
        </main>
    )
}
