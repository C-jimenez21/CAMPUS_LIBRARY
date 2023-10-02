//components
import { useState, useEffect } from 'react'
import axios from 'axios';
const url = import.meta.env

function DynamicTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function bringData() {
    try {
      const response = await axios.get(`http://${url.VITE_HOSTNAME}:${url.VITE_PORT_BACKEND}/api/User/pruebas`);
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

  useEffect(() => {
    console.log(`http://${url.VITE_HOSTNAME}:${url.VITE_PORT_BACKEND}/api/User/pruebas`);
    // Realizar una solicitud a una API utilizando Axios
    bringData()
  }, []); // El segundo argumento vacío indica que este efecto se ejecutará solo una vez, similar a componentDidMount en clases

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div>
      <h1>Tabla Dinámica</h1>
      <table>
        <thead>
          <tr>
              <th>ID</th>
              <th>name</th>
              <th>lastname</th>
              <th>username</th>
              <th>password</th>
              <th>phone</th>
              <th>rol</th>
            {/* Agrega más encabezados de columnas según tus datos */}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name ??  "usuario"}</td>
              <td>{item.lastname ?? "nn"}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>{item.phone ?? "⚖️"}</td>
              <td>{item.rol}</td>
              {/* Agrega más celdas de datos según tus datos */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DynamicTable;