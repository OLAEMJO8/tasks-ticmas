const Task = require("../models/task");

exports.getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task || task.deleted) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
