const Task = require('../models/task');

exports.updateTask = async (id, { title, description }) => {
  const [updated] = await Task.update(
    { title, description },
    { where: { id, deleted: false } }
  );
  if (updated) {
    return await Task.findByPk(id);
  }
  return null;
};