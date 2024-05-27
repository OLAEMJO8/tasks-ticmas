require('dotenv').config();

const express = require("express");
const app = express();
const taskRoutes = require("./routes/taskRoutes");
const sequelize = require("./config/database");

app.use(express.json());
app.use("/api", taskRoutes);

(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Connection database");
    } catch (error) {
        console.error("Unable to connect database:", error);
    }
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;