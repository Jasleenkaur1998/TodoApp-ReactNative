const mongoose = require("mongoose")

const Schema = mongoose.Schema;

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

}, {
    // This gives created at and updated at
    timestamps: true
})


//Exporting the Schema
const User = mongoose.model('User', UserSchema);

module.exports = User;