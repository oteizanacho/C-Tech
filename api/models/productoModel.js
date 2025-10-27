import mongoose from 'mongoose';
const { Schema } = mongoose;

// Este es el "molde" para cada documento de producto
const productoSchema = new Schema(
  {
    nombre: { 
      type: String, 
      required: [true, 'El nombre es obligatorio'] 
    },
    marca: { 
      type: String, 
      required: true 
    },
    precio: { 
      type: Number, 
      required: true, 
      default: 0 
    },
    stock: { 
      type: Number, 
      required: true, 
      default: 0 
    },
    imagenUrl: { 
      type: String, 
      required: false // La imagen puede no ser obligatoria al inicio
    },
    descripcion: { 
      type: String, 
      required: false 
    }
  },
  {
    // Esto añade automáticamente los campos:
    // createdAt (fecha de creación)
    // updatedAt (fecha de última actualización)
    timestamps: true,
  }
);

// Creamos el "Modelo" basado en el schema.
// Mongo creará una colección llamada "productos" (pluraliza "Producto")
const Producto = mongoose.model('Producto', productoSchema);

export default Producto;