import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js'; 

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const connection = process.env.MONGODB_URL;

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksRouter);

// Conexión a MongoDB
mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // Inicia el servidor solo después de que la conexión a la base de datos sea exitosa
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  });


// Manejo de errores no capturados
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Aplicación específica: decidir si cerrar la aplicación aquí
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Aplicación específica: decidir si cerrar la aplicación aquí
  process.exit(1);
});
