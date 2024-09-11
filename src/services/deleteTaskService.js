const Task = require('../models/task');

exports.deleteTask = async (id) => {
  const task = await Task.findByPk(id);
  if (task) {
    task.status = 'eliminada';
    task.deleted = true;
    await task.save();
  }
};