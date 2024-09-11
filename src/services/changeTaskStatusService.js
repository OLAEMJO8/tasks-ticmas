const Task = require('../models/task');

exports.changeTaskStatus = async (id, status) => {
  const task = await Task.findByPk(id);
  if (!task) throw new Error("Task not found");
  task.status = status;
  task.deleted = status === 'eliminada';
  await task.save();
  return task;
};