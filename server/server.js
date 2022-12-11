const express = require("express");
const app = express();
const PORT  = 8080;
const mongoose = require("mongoose");
require('dotenv').config();

const todoRoutes = require("./routes/todo");
const userRoutes = require("./routes/user");

mongoose.connect(process.env.MONGO_URI, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Database Connected Sucesfully");
    }
})


app.use("/api/v1/users", userRoutes);

app.use("/api/v1/todos", todoRoutes);


app.get("/", (request, response) => {
    response.send("This is todo endpoint!");
})

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})
