import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Carga las variables de entorno del archivo .env
dotenv.config();

const connectDB = async () => {
  try {
    // process.env.MONGO_URI accede a la variable que pusimos en .env
    await mongoose.connect(process.env.MONGO_URI);

    // Usamos console.log por ahora para saber que conectó
    console.log('MongoDB Conectado...'); 

  } catch (err) {
    console.error(`Error de conexión: ${err.message}`);
    // Salir del proceso con falla
    process.exit(1);
  }
};

export default connectDB;