const express = require("express");
const router = express.Router();

const validateToken = require("../middleware/auth");

const {
    registerUser,
    loginUser,
    getUser,
    // deleteUser,
    getUserById,
    // updateUser
} = require("../controller/user");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/", validateToken, getUser);

router.get("/:id", validateToken, getUserById);

// router.delete("/:id", deleteUser);

// router.put("/:id", updateUser);


module.exports = router;