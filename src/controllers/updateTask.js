const Task = require("../models/task");

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const [updated] = await Task.update(
      { title, description },
      { where: { id } }
    );
    if (updated === 0) {
      return res.status(404).json({ error: "Task not found" });
    }
    const updatedTask = await Task.findByPk(id);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
