const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const recipeRouter = require("./routers/recipeRouter");
const ingredientsRouter = require("./routers/ingredientsRouter");

const server = express();

server.use(helmet());
server.use(bodyParser.json());
server.use(cors());

server.use("/api/recipes", recipeRouter);
server.use("/api/ingredients", ingredientsRouter);

module.exports = server;
