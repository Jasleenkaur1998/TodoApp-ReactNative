const { User } = require("../models/user");

/**
 * @description API to create a User 
 * @param {*} req
 * @param {*} res
 */



const registerUser = async (req, res) => {
    try {
    const data = req.body;

    const userData = await User.create({
        name: data.name,
        email: data.email,
        password: data.password
    });

    return res.status(201).json({
        message: "User Registered succesfully",
        data: userData,
    });

    } catch (error) {
        return res.status(500).json({
        message: error.message,
    });
    }
};


/**
 * @description API to fetch all Users from DB
 * @param {*} req
 * @param {*} res
 */
const getUser = (req, res) => {
    User.find()
    .then((result) => {
        return res.status(200).json({
        message: "Succesfully fetched all Users",
        data: result,
        });
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message,
        });
    });
};

/**
 * @description API to fetch User of a particular user from DB
 * @param {*} req
 * @param {*} res
 */
const getUserById = (req, res) => {
    User.findOne({ _id: req.params.id })
    .then((result) => {
        return res.status(200).json({
            message: "Succesfully fetched User!",
            data: result,
        });
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message,
        });
    });
};


module.exports = {
    registerUser,
    getUser,
    getUserById
};
