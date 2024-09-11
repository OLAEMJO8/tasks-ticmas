const taskService = require("../services/getTasksByStatusService");

exports.getTasksByStatus = async (req, res) => {
  const { status } = req.params;
  try {
    const tasks = await taskService.getTasksByStatus(status);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

