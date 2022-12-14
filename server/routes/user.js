const express = require("express");
const router = express.Router();

const validateToken = require("../middleware/auth");

const {
    registerUser,
    loginUser,
    getUser,
    getUserById,
} = require("../controller/user");
const ROLE = require("../config/roles");
const verifyRoles = require("../middleware/roles");

/**
 * @swagger
 * users/register:
 *   post:
 *     description: Add a new user
 *     responses:
 *       200:
 *         description: return positive response
 */
router.post("/register", registerUser);


/**
 * @swagger
 * users/login:
 *   post:
 *     description: Get all the Todos
 *     responses:
 *       200:
 *         description: return positive response
 */
router.post("/login", loginUser);


/**
 * @swagger
 * /users/
 *   get:
 *     description: Get information of a Todo using id
 *     responses:
 *       200:
 *         description: return positive response
 */
router.get("/", validateToken, verifyRoles(ROLE.ADMIN), getUser);

/**
 * @swagger
 * /users/:id:
 *   get:
 *     description: Get information of a Todo using id
 *     responses:
 *       200:
 *         description: return positive response
 */
router.get("/:id", validateToken,  verifyRoles(ROLE.ADMIN, ROLE.PERSON), getUserById);



module.exports = router;