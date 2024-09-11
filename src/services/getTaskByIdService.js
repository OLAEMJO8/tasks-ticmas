const Task = require('../models/task');

exports.getTaskById = async (id) => {
  return await Task.findOne({ where: { id, deleted: false } });
};