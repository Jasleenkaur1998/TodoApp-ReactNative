const express = require("express");
const router = express.Router();

const {
    registerUser,
    // loginUser,
    getUser,
    // deleteUser,
    getUserById,
    // updateUser
} = require("../controller/user");

router.post("/register", registerUser);

// router.post("/login", loginUser);

router.get("/", getUser);

router.get("/:id", getUserById);

// router.delete("/:id", deleteUser);

// router.put("/:id", updateUser);


module.exports = router;