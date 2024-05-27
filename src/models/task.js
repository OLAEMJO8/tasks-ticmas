const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('pendiente', 'en progreso', 'completada', 'eliminada'),
        defaultValue: 'pendiente',
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = Task;
