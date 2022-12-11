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


/**
 * @description API to delete todo
 * @param {*} req
 * @param {*} res
 */
const deleteTodo = (req, res) => {
    const id = req.params.id;
    Todo.findByIdAndDelete(id)
        .then((result) => {
        return res.status(200).json({
            message: "Todo succesfully delete",
        });
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message,
        });
    });
};

/**
 * @description API to update Todo
 * @param {*} req
 * @param {*} res
 */
const updateTodo = (req, res) => {
    const id = req.params.id;

    Todo.findOneAndUpdate({ _id: id }, req.body, {
        returnOrignal: false,
    }).then((result) => {
        res.status(200).json({
            message: "Succesfully updated the Todo",
            data: result,
    });
    });
};


module.exports = {
    addTodo,
    getTodo,
    getTodoById,
    deleteTodo,
    updateTodo
};
