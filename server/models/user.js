const mongoose = require("mongoose")

const Schema = mongoose.Schema

//Creating the User Schema

const UserSchema = new Schema({

    email: {
        type: String,
        minlength: 1,
        required: true
    },

    name: {
        type: String,
        minlength: 1,
        required: true
    },

    password: {
        type: String,
        required: true,
      },

})


//Exporting the Schema
const User = mongoose.model('Todo', UserSchema)

module.exports = User;