const taskService = require("../services/deleteTaskService");

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await taskService.deleteTask(id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
