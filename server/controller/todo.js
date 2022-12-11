const { Todo } = require("../models/todo");
const { User } = require("../models/user");

/**
 * @description API to create a todo 
 * @param {*} req
 * @param {*} res
 */



const addTodo = async (req, res) => {
    try {
    const data = req.body;

    const findUser = await User.findById(data.user);

    if (!findUser) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    const reviewData = await Todo.create({
        todo: data.todo,
    });

    return res.status(201).json({
        message: "Todo succesfully",
        data: reviewData,
    });
    } catch (error) {
        return res.status(500).json({
        message: error.message,
    });
    }
};


/**
 * @description API to fetch all ToDos from DB
 * @param {*} req
 * @param {*} res
 */
const getTodo = (req, res) => {
    Todo.find().populate({
    path: "user"
    })
    .then((result) => {
        return res.status(200).json({
        message: "Succesfully fetched all Todos",
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
 * @description API to fetch Todo of a particular user from DB
 * @param {*} req
 * @param {*} res
 */
const getTodoById = (req, res) => {
    Todo.find({ user: req.params.id }).populate({
        path: "user"
    })
    .then((result) => {
        return res.status(200).json({
            message: "Succesfully fetched Todo of given user",
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
    addTodo,
    getTodo,
    getTodoById
};
