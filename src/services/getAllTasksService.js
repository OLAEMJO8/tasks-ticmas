const Task = require('../models/task');

exports.getAllTasks = async () => {
  return await Task.findAll({ where: { deleted: false } });
};