const Task = require("../models/task");

exports.getTasksByStatus = async (req, res) => {
  const { status } = req.params;
  
  if (status.toLowerCase() === 'eliminada') {
    return res.status(403).json({ error: "Access to deleted tasks is not allowed. Please contact the administrator." });
  }

  try {
    const tasks = await Task.findAll({ where: { status, deleted: false } });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

