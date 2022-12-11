const express = require("express");
const app = express();
const PORT  = 8080;
const mongoose = require("mongoose");
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Database Connected Sucesfully");
    }
})


app.get("/", (request, response) => {
    response.send("This is todo endpoint!");
})

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})
