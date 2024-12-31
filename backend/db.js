const mongoose = require("mongoose");
require("dotenv").config();

const databaseUrl = process.env.DATABASE_URL;

mongoose.connect(`${databaseUrl}`);

const todoSchema = new mongoose.Schema({
  name: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todos", todoSchema);

module.exports = { Todo };
