const Task = require('../models/task');

exports.getDaysSinceCreationService = async (id) => {
  const task = await Task.findByPk(id);
  if (!task) throw new Error("Task not found");
  
  const currentDate = new Date();
  const creationDate = new Date(task.createdAt);
  const daysSinceCreation = Math.floor(
    (currentDate - creationDate) / (1000 * 60 * 60 * 24)
  );
  return daysSinceCreation;
};
