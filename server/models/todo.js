const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Creating the Todo Schema

const TodoSchema = new Schema({
  title: {
    type: String,
    minlength: 1,
    required: true,
  },

  description: {
    type: String,
    minlength: 1
  },

  due: {
    type: Date,
  }, 

  priority: {
    type: String,
    required: true
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
}, {
    timestamps: true
});

//Exporting the Schema
const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
