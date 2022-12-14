const  User  = require("../models/user");
const Todo = require("../models/todo");

/**
 * @description API to create a todo
 * @param {*} req
 * @param {*} res
 */

const addTodo = async (req, res) => {
  try {

    const whoCreated = req.email;
    
    const data = req.body;

    const findUser = await User.findOne({ email: whoCreated });

    const reviewData = await Todo.create({
      title: data.title,
      description: data.description,
      due: data.due,
      priority: data.priority,
      user: findUser._id
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
const getTodos = (req, res) => {
  Todo.find().populate({
    path: "user",
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
const getTodoByUserId = (req, res) => {
  Todo.findOne({ email: req.email })
    .populate({
      path: "user",
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
  getTodos,
  getTodoByUserId,
  deleteTodo,
  updateTodo,
};
