import express from 'express';
const router = express.Router();

// Importamos la lógica (controladores)
// ¡OJO! Incluir .js
import { 
    getAllProductos, 
    getProductoById,
    createProducto
} from '../controllers/productoController.js';

// ----- DEFINICIÓN DE RUTAS -----

// Ruta: GET /api/productos/
// Desc: Obtener todos los productos
router.get('/', getAllProductos);

// Ruta: GET /api/productos/:id
// Desc: Obtener un producto por su ID
router.get('/:id', getProductoById);

// POST /api/productos/
router.post('/', createProducto);

// (Aquí pondríamos luego las rutas POST, PUT, DELETE)
// router.post('/', crearProducto);
// router.put('/:id', actualizarProducto);

// Exportamos 'router' usando la sintaxis ESM
export default router;