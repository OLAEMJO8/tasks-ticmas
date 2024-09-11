const Task = require('../models/task');

exports.createTask = async ({ title, description }) => {
  return await Task.create({ title, description, status: 'pendiente', deleted: false });
};