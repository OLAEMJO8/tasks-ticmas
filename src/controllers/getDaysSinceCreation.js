const Task = require("../models/task");

exports.getDaysSinceCreation = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    const currentDate = new Date();
    const creationDate = new Date(task.createdAt);
    const daysSinceCreation = Math.floor(
      (currentDate - creationDate) / (1000 * 60 * 60 * 24)
    );
    res.status(200).json({ daysSinceCreation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
