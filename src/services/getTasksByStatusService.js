const Task = require('../models/task');

exports.getTasksByStatus = async (status) => {
  if (status === 'eliminada') {
    throw new Error("Access to deleted tasks is not allowed.");
  }
  return await Task.findAll({ where: { status, deleted: false } });
};