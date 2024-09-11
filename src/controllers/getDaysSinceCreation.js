const taskService = require("../services/getDaysSinceCreationService");

exports.getDaysSinceCreation = async (req, res) => {
  const { id } = req.params;
  try {
    const daysSinceCreation = await taskService.getDaysSinceCreationService(id);
    res.status(200).json({ daysSinceCreation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
