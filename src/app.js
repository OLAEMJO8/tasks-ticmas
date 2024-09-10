require('dotenv').config();

const express = require("express");
const app = express();
const taskRoutes = require("./routes/taskRoutes");
const sequelize = require('./config/database'); 

// Verificar la conexión con Sequelize
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Middleware para procesar JSON
app.use(express.json());

// Rutas
app.use("/api", taskRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
