
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
// ¡OJO! En ESM debes incluir la extensión .js en tus propios archivos
import productoRoutes from './routes/productos.js'; 

//conexion a la base de datos
connectDB();

// Inicializamos la app de Express
const app = express();

// --- Middlewares ---
// Habilita CORS para que tu frontend de React pueda hacer peticiones
app.use(cors()); 
// Permite que Express entienda peticiones con body en formato JSON
app.use(express.json()); 

// --- Rutas ---
// Le decimos a la app que use las rutas definidas en productoRoutes
// cuando alguien visite /api/productos
app.use('/api/productos', productoRoutes);

// --- Exportar la App para Vercel ---
// Vercel buscará este 'module.exports'.
// NO USAMOS app.listen() porque Vercel maneja eso por nosotros.
// Exportamos 'app' usando la sintaxis ESM
export default app;