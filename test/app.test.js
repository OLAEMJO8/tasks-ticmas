const request = require("supertest");
const app = require("../src/app.js");

describe("Task Controller", () => {
  let taskId;

  // Test createTask 
  describe("POST /tasks", () => {
    test("should create a new task", async () => {
      const response = await request(app).post("/api/tasks").send({
        title: "New Task",
        description: "New Description",
      });
      expect(response.statusCode).toBe(201);
      expect(response.body.id).toBeDefined();
      taskId = response.body.id;
    });
  });

  // Test getAllTasks 
  describe("GET /tasks", () => {
    test("should get all tasks", async () => {
      const response = await request(app).get("/api/tasks");
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  // Test getTaskById 
  describe("GET /tasks/:id", () => {
    test("should get a task by ID", async () => {
      const response = await request(app).get(`/api/tasks/${taskId}`);
      expect(response.statusCode).toBe(200);
      expect(response.body.id).toBe(taskId);
    });

    test("should return 404 if task does not exist", async () => {
      const response = await request(app).get("/api/tasks/9999");
      expect(response.statusCode).toBe(404);
    });
  });

  // Test updateTask 
  describe("PUT /tasks/:id", () => {
    test("should update a task", async () => {
      const response = await request(app).put(`/api/tasks/${taskId}`).send({
        title: "Updated Task",
        description: "Updated Description",
      });
      expect(response.statusCode).toBe(200);
      expect(response.body.title).toBe("Updated Task");
      expect(response.body.description).toBe("Updated Description");
    });
  });

  // Test deleteTask 
  describe("DELETE /tasks/:id", () => {
    test("should delete a task", async () => {
      const response = await request(app).delete(`/api/tasks/${taskId}`);
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("Task deleted successfully");
    });
  });

  // Test getTasksByStatus
  describe("GET /tasks/status/:status", () => {
    test("should get tasks by status", async () => {
      const response = await request(app).get("/api/tasks/status/pendiente");
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  // Test changeTaskStatus 
  describe("PATCH /tasks/:id/status", () => {
    test("should change the status of a task", async () => {
      const response = await request(app)
        .patch(`/api/tasks/${taskId}/status`)
        .send({ status: "pendiente" });
      expect(response.statusCode).toBe(200);
      expect(response.body.task.status).toBe("pendiente");
    });
  });

  // Test getDaysSinceCreation
  describe("GET /tasks/:id/days-since-creation", () => {
    test("should get days since creation for a task", async () => {
      const response = await request(app).get(
        `/api/tasks/${taskId}/days-since-creation`
      );
      expect(response.statusCode).toBe(200);
      expect(response.body.daysSinceCreation).toBeDefined();
    });
  });
});
