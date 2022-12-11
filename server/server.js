const express = require("express");
const app = express();
const PORT  = 8080;
const mongoose = require("mongoose");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require('dotenv').config();


// swagger
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "TODO API",
        description: "TODO API Information",
        contact: {
          name: "TODO Developers",
        },
        servers: ["http://localhost:8080"],
      },
    },
    apis: ["./routes/*.js", "server.js"],
    // apis: ["app.js"]
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  

// const todoRoutes = require("./routes/todo");
// const userRoutes = require("./routes/user");

mongoose.connect(process.env.MONGO_URI, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Database Connected Sucesfully");
    }
})


// app.use("/api/v1/users", userRoutes);

// app.use("/api/v1/todos", todoRoutes);

/**
 * @swagger
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get("/", (request, response) => {
    response.send("This is todo endpoint!");
})

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})
