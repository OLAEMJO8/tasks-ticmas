const Task = require("../models/task");

exports.changeTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const task = await Task.findByPk(id);
    task.status = status;
    await task.save();
    res.status(200).json({ task: { ...task.toJSON(), status } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
