import express from 'express';
import routeMaestro from './routes/maestro.mjs';
import routeEstudiante from './routes/estudiante.mjs';
import { verifyToken } from './controllers/authController.mjs'; // Importa el middleware de autenticación
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import swaggerSetup from './swagger.js'; // Importa la configuración de Swagger
import tokenRoutes from './routes/token.mjs';

dotenv.config(); // Carga las variables de entorno desde el archivo .env

const app = new express();

// Define el puerto desde el archivo .env o usa 4500 como predeterminado
const PORT = process.env.PORT || 4500;

app.use(express.json());

// URI de conexión a MongoDB desde el archivo .env
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
    .then(() => console.log('Conexión a MongoDB Atlas exitosa'))
    .catch(err => console.error('Error al conectar a MongoDB Atlas:', err));

// Configuración de Swagger
swaggerSetup(app);

// Rutas protegidas con el middleware `verifyToken`
app.use('/maestro', verifyToken, routeMaestro);
app.use('/estudiante', verifyToken, routeEstudiante);

// Ruta para obtener un token JWT
app.use('/token', tokenRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ state: false, message: 'Error interno del servidor' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));