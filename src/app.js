require('dotenv').config();

const express = require("express");
const app = express();
const taskRoutes = require("./routes/taskRoutes");
const { Pool } = require("pg");

// Crear el pool de conexiones 
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false 
  }
});

// Verificar la conexión con PostgreSQL
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Database connected successfully');
  release();
});

// Middleware para inyectar la conexión a la base de datos en cada request
app.use((req, res, next) => {
  req.db = pool;
  next();
});

app.use(express.json());

// Rutas
app.use("/api", taskRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
