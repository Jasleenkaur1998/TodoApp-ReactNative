const express = require("express");
const router = express.Router();

const {
  addTodo,
  getTodoByUserId,
  deleteTodo,
  updateTodo,
  getTodos,
} = require("../controller/todo");

// Routes
/**
 * @swagger
 * /add:
 *   post:
 *     description: Add a new Todo
 *     responses:
 *       200:
 *         description: return positive response
 */
router.post("/add", addTodo);

// Routes
/**
 * @swagger
 * /:
 *   get:
 *     description: Get all the Todos
 *     responses:
 *       200:
 *         description: return positive response
 */
router.get("/", getTodos);

// Routes
/**
 * @swagger
 * /todo/:id:
 *   get:
 *     description: Get information of a Todo using id
 *     responses:
 *       200:
 *         description: return positive response
 */
router.get("/:id", getTodoByUserId);

// Routes
/**
 * @swagger
 * /todo/:id:
 *   put:
 *     description: Update information of a Todo
 *     responses:
 *       200:
 *         description: return positive response
 */
router.put("/:id", updateTodo);

// Routes
/**
 * @swagger
 * /todo/:id:
 *   delete:
 *     description: Delete a Todo using id from the database
 *     responses:
 *       200:
 *         description: return positive response
 */
router.delete("/:id", deleteTodo);

module.exports = router;
