// Este archivo contendrá la LÓGICA de la ruta.
// Por ahora, solo devolvemos datos falsos (placeholders).
// En el Paso 2, aquí es donde llamaremos a MongoDB.

// Aquí no importamos nada, solo exportamos.
// Usamos "export const" en lugar de "module.exports"

import Producto from "../models/productoModel.js";

// GET /api/productos
// Marcamos las funciones como 'async' porque las operaciones de DB toman tiempo
export const getAllProductos = async (req, res) => {
    try {
        // Usamos Mongoose: .find({}) busca TODOS los documentos en la colección Producto
        const productos = await Producto.find({});
        // Enviamos la respuesta en formato JSON
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos", error: error.message });
    }
};

// GET /api/productos/:id
export const getProductoById = async (req, res) => {
    try {
        // Obtenemos el ID de la URL (ej. /api/productos/2)
        const { id } = req.params;
        // Usamos Mongoose: .find({}) busca TODOS los documentos en la colección Producto
        const producto = await Producto.findById(id);
        
        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el producto", error: error.message });
    }
};

// --- BONUS: Función para CREAR un producto ---
// (La necesitaremos para añadir datos)
export const createProducto = async (req, res) => {
    try {
        // req.body contendrá los datos del nuevo producto (ej. { nombre, precio, ... })
        // que enviaremos desde el frontend o Postman
        
        // Creamos una nueva instancia del modelo
        const nuevoProducto = new Producto(req.body);
        
        // .save() lo guarda en la base de datos
        const productoGuardado = await nuevoProducto.save();
        
        res.status(201).json(productoGuardado); // 201 = Creado exitosamente

    } catch (error) {
        res.status(400).json({ message: "Error al crear el producto", error: error.message });
    }
};