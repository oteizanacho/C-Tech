import { useState, useEffect } from 'react';
import './App.css'; // Importaremos unos estilos básicos

function App() {
  // 1. Creamos un "estado" para guardar la lista de productos
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. useEffect se ejecuta cuando el componente se carga
  useEffect(() => {
    // 3. Definimos una función 'async' para traer los datos
    const fetchProductos = async () => {
      try {
        // 4. ¡LA MAGIA! Llamamos a nuestra API.
        // No ponemos http://localhost:XXXX, solo la ruta relativa.
        // Vercel sabrá cómo redirigir esto a tu API en /api
        const response = await fetch('/api/productos');

        if (!response.ok) {
          throw new Error('La respuesta de la red no fue OK');
        }

        const data = await response.json();
        setProductos(data); // 5. Guardamos los productos en el estado

      } catch (err) {
        setError(err.message); // 6. Manejamos cualquier error
      } finally {
        setLoading(false); // 7. Dejamos de "cargar"
      }
    };

    fetchProductos(); // Llamamos a la función
  }, []); // El array vacío [] significa que esto se ejecuta 1 sola vez

  // --- Renderizado del Componente ---
  if (loading) {
    return <div>Cargando celulares...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="app">
      <h1>Mi Tienda de Celulares</h1>
      <div className="product-list">
        {/* 8. Mapeamos (recorremos) el array de productos y creamos una card para cada uno */}
        {productos.map((producto) => (
          <div key={producto._id || producto.id} className="product-card">
            {/* Usamos _id porque Mongo lo genera así */}
            <img src={producto.imagenUrl || 'https://via.placeholder.com/150'} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>{producto.marca}</p>
            <p className="price">${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;