const taskService = require("../services/changeTaskStatusService");

exports.changeTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const updatedTask = await taskService.changeTaskStatus(id, status);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};