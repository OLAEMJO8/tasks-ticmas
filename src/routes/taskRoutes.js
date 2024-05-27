const express = require("express");
const router = express.Router();
const { createTask } = require("../controllers/createTask");
const { getAllTasks } = require("../controllers/getAllTasks");
const { getTaskById } = require("../controllers/getTaskById");
const { updateTask } = require("../controllers/updateTask");
const { deleteTask } = require("../controllers/deleteTask");
const { getTasksByStatus } = require("../controllers/getTasksByStatus");
const { changeTaskStatus } = require("../controllers/changeTaskStatus");
const { getDaysSinceCreation } = require("../controllers/getDaysSinceCreation");

router.post("/tasks", createTask);
router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaskById);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.get("/tasks/status/:status", getTasksByStatus);
router.patch("/tasks/:id/status", changeTaskStatus);
router.get("/tasks/:id/days-since-creation", getDaysSinceCreation);

module.exports = router;
