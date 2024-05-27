const Task = require("../models/task");

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    let task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    task.status = "eliminada";
    task.deleted = true;
    await task.save();

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
